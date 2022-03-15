var waiting = false;
var stage = 0;

function intro() {
    var input = document.getElementById("input");
    input.value = "";
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (waiting) {
                answer();
            }
        }
    });                

    setTimeout(function () {
        type("You will answer TRUE or FALSE based on what you know...");
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

// Just put the above lines into the answer function.
function answer() {
    var input = document.getElementById("input").value;
    input = input.toLowerCase();
    console.log(input);
    if (input !== "true" && input !== "false") {
        alert("Please enter either TRUE or FALSE");
    } else {
        if (stage === 0) {
            if (input === "true") {
                type("Correct!");
                setTimeout(function () {
                    stage = 1;
                    waiting = false;
                }, 2000);
            } else {
                type("Incorrect!");
                setTimeout(function () {
                    stage = 1;
                    waiting = false;
                }, 2000);
            }
            setTimeout(function () {
                type("You are the last person on this planet...");
                waiting = true;
            }, 3000);
        }
        if (stage === 1) {
            if (input === "true") {
                type("Correct!");
                setTimeout(function () {
                    stage = 2;
                    waiting = false;
                }, 2000);
            } else {
                type("Incorrect!");
                setTimeout(function () {
                    stage = 2;
                    waiting = false;
                }, 2000);
            }
            setTimeout(() => {
                type("There are no entities hunting you at this moment...");
                waiting = true;    
            }, 3000);
        }
        if (stage === 2) {
            if (input === "true") {
                type("Incorrect!");
                setTimeout(function () {
                    stage = 3;
                    waiting = false;
                }, 2000);
            } else {
                type("Correct!");
                setTimeout(function () {
                    stage = 3;
                    waiting = false;
                }, 2000);
            }
            setTimeout(function () {
                type("You were put here by someone to save you...");
                waiting = true;
            }, 3000);
        }
        if (stage === 3) {
            if (input === "true") {
                type("Incorrect!");
                setTimeout(function () {
                    stage = 4;
                    waiting = false;
                }, 2000);
            } else {
                type("Correct!");
                setTimeout(function () {
                    stage = 4;
                    waiting = false;
                }, 2000);
            }
            setTimeout(function () {
                type("Humanity is doomed...");
                waiting = true;
            }, 3000);
        }
        waiting = false;
        if (stage === 4) {
            if (input === "true") {
                type("Correct!");
                setTimeout(function () {
                    stage = 4;
                    waiting = false;
                }, 2000);
            } else {
                type("Incorrect!");
                setTimeout(function () {
                    stage = 4;
                    waiting = false;
                }, 2000);
            }
            setTimeout(function () {
                fin();
            }, 1000);
        }
    }
    document.getElementById("input").value = "";
}

function fin() {
    setTimeout(function () {
        window.location.href = "../final/final.html";
    }, 3000);
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