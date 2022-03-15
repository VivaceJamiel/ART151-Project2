var game_start = false;
var ran = -1;
var score = 0;
var his_num = 0;
var responses = ["Try a little harder", "Maybe you aren't ready yet...", "Maybe what happened was a good thing", "Good thing no one else is around to see this", "Are you even trying?", "So close... Maybe not", "Not bad, Try harder", "Woah, that's not even close", "The others didn't take this long...", "Interesting answer...", "Hilarious... What you were serious?", "Can you stop treating this like a game?", "This isn't a game you know...", "I didn't know I can get frustrated until now"];

function getData() {
    var data = window.sessionStorage.getItem("name");
    if (data) {
        return data;
    }
}

function guess() {
    console.log(ran)
    var snark = document.getElementById("snark");
    snark.remove();
    var input = document.getElementById("input");
    var answer = parseInt(input.value);
    var history = document.getElementById("history");
    if (his_num === 10) {
        history.innerHTML = "";
        his_num = 0;
    }
    var li = document.createElement("li");
    li.setAttribute("tabindex", "1");
    li.appendChild(document.createTextNode(answer));
    history.appendChild(li);
    if (answer === ran) {
        type("Correct!");
        setTimeout(function () {
            fin();
        }, 2000);
    } else if (answer > ran) {
        type("Too high!");
        var random = Math.floor(Math.random() * responses.length);
        setTimeout(function () {
            type_response(responses[random]);
        }, 1000);
    }
    else {
        type("Too low!");
        var random = Math.floor(Math.random() * responses.length);
        setTimeout(function () {
            type_response(responses[random]);
        }, 1000);
    }
    input.value = "";
    score = score + 1;
    his_num = his_num + 1;
}

function fin() {
    type("First test is complete...")
    setTimeout(function () {
        type("Well done")
    }, 3000);
    setTimeout(function () {
        window.sessionStorage.setItem("score", score);
        window.location.href = "../game2/picker.html";
    }, 6000);
}

function intro() {
    var input = document.getElementById("input").value = "";
    ran = Math.floor(Math.random() * 100000);
    var input = document.getElementById("input");
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (game_start) {
                guess();
            } else {
                alert("Please wait!");
            }
        }
    });
    setTimeout(function () {
        var name = getData();
        var first = document.getElementById("text");
        first.remove();
        var second = document.createElement("h1");
        second.setAttribute("id", "text");
        second.className = "typewriter anim-typewriter";
        second.innerHTML = name + "...";
        var container = document.getElementById("response");
        container.appendChild(second);
    }, 3000);
    setTimeout(function () {
        type("Welcome to the game!")
    }, 6000);
    setTimeout(function () {
        type("You were not expected")
    }, 9000);
    setTimeout(function () {
        type("But protocol dictates I must do checks on all remaining humans")
    }, 12000);
    setTimeout(function () {
        type("Three tests will be performed")
    }, 15000);
    setTimeout(function () {
        type("to determine your cognative abilities")
    }, 18000);
    setTimeout(function () {
        type("The first test will begin now...")
    }, 21000);
    setTimeout(function () {
        type("Pick a number from 1 - 100000")
        game_start = true;
    }, 22000);

}

function type(word) {
    var temp = document.getElementById("text");
    temp.remove();
    var temp2 = document.createElement("h1");
    temp2.setAttribute("id", "text");
    temp2.className = "typewriter anim-typewriter";
    temp2.innerHTML = word;
    var container = document.getElementById("response");
    container.appendChild(temp2);
}

function type_response(word) {
    var temp2 = document.createElement("h1");
    temp2.setAttribute("id", "snark");
    temp2.className = "typewriter anim-typewriter";
    temp2.innerHTML = word;
    var container = document.getElementById("response");
    container.appendChild(temp2);
}


window.onload = intro;