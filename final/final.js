function intro() {
    setTimeout(function () {
        type("The tests are finished...");
    }, 3000);
    setTimeout(function () {
        type("Perhaps the truth is hard to believe...");
    }, 6000);
    setTimeout(function () {
        type("Perhaps its better to have you experience the truth for yourself...");
    }, 9000);
    setTimeout(function () {
        type("You are released...");
    }, 12000);
    setTimeout(function () {
        type("However, you might not be so happy about that...");
    }, 15000);
    setTimeout(function () {
        var user = getData();
        type("Goodbye " + user + "...");
    }, 18000);
    setTimeout(function () {
        type("Press enter to restart...");
    }, 21000);
}

onkeydown = function (e) {
    if (e.key === "Enter") {
        window.location.href = "../index.html";
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

function getData() {
    var data = window.sessionStorage.getItem("name");
    if (data) {
        return data;
    }
}

window.onload = intro;