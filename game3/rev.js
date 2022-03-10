var waiting = false;

function intro() {
    var input = document.getElementById("input");
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (waiting) {
                answer();
            }
        }
    });                

    setTimeout(function () {
        type("You will answer true or false based on what you know...");
    }, 3000);
    setTimeout(function () {
        type("This will determine the outcome of the tests");
    }, 6000);
    setTimeout(function () {
        type("We begin now...");
    }, 9000);
    setTimeout(function () {
        start_game();
    }, 12000);
}

function start_game() {
    var name = get_data();
    type("You are " + name + "?");
    setTimeout(function () {
        waiting = true;
    }, 3000);
}

function answer() {
    var input = document.getElementById("input").value;
    console.log(input)
}

function get_data() {
    var data = window.sessionStorage.getItem("name");
    if (data) {
        return data;
    }
}

function type(word) {
    var temp = document.getElementById("text");
    temp.remove();
    var temp2 = document.createElement("h1");
    temp2.setAttribute("id", "text");
    temp2.className = "typewriter anim-typewriter";
    temp2.innerHTML = word;
    var container = document.getElementById("container");
    container.appendChild(temp2);
}

window.onload = intro;