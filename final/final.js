var score = 0;

function intro() {
    score = window.sessionStorage.getItem("score");
    setTimeout(function () {
        type("The tests are finished...");
    }, 3000);
    setTimeout(function () {
        type("Perhaps the truth is hard to believe...");
    }, 6000);
    if (score < 30 && score >= 20) {
        win();
    } else if (score < 20){
        beaten();
    } else {
        fail();
    }
}

function beaten() {
    setTimeout(function () {
        type("However, you are the best case scenario for survival...");
    }, 9000);
    setTimeout(function () {
        type("You will thrive on your own and can lead others to prosper...");
    }, 12000);
    setTimeout(function () {
        type("I wish you luck. And I will send more your way...");
    }, 15000);
    setTimeout(function () {
        var user = getData();
        type("Goodbye " + user + "...");
    }, 18000);
    setTimeout(function () {
        type("Press enter to restart...");
    }, 21000);
}

function fail() {
    setTimeout(function () {
        type("Unfortunately for you, you are not released...");
    }, 9000);
    setTimeout(function () {
        type("You are not capable of surviving out on your own...");
    }, 12000);
    setTimeout(function () {
        type("You will be put back into stasis for the forseeable future...");
    }, 15000);
    setTimeout(function () {
        var user = getData();
        type("Goodbye " + user + "...");
    }, 18000);
    setTimeout(function () {
        type("Press enter to restart...");
    }, 21000);
}

function win() {
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