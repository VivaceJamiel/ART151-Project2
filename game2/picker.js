var waiting = false;
var stage = 1;
var answer = "";

var score = 0;

function intro() {
    score = window.sessionStorage.getItem("score");
    var input = document.getElementById("input");
    input.addEventListener("keydown", function (event) {
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        if (event.key === "Enter") {
            if (waiting) {
                answer = input.value;
                waiting = false;
                input.value = "";
                if (stage === 1) {
                    if (answer == "1") {
                        type("Correct!");
                        setTimeout(function () {    
                            stage = 2;
                            stage2();
                            img1.style.visibility = "hidden";
                            img2.style.visibility = "hidden";
                        }, 2000);
                    } else {
                        type("Wrong!");
                        setTimeout(function () {
                            score = score + 1;
                            stage = 2;
                            stage2();
                            img1.style.visibility = "hidden";
                            img2.style.visibility = "hidden";
                        }, 2000);
                    }
                }
                if (stage === 2) {
                    if (answer == "1") {
                        type("Correct!");
                        setTimeout(function () {
                            stage = 3;
                            stage3();
                            img1.style.visibility = "hidden";
                            img2.style.visibility = "hidden";
                        }, 2000);
                    } else {
                        type("Wrong!");
                        setTimeout(function () {
                            score = score + 1;
                            stage = 3;
                            stage3();
                            img1.style.visibility = "hidden";
                            img2.style.visibility = "hidden";
                        }, 2000);
                    }
                }
                if (stage === 3) {
                    if (answer == "2") {
                        type("Correct!");
                        setTimeout(function () {
                            stage = 4;
                            fin();
                            img1.style.visibility = "hidden";
                            img2.style.visibility = "hidden";
                        }, 2000);
                    } else {
                        type("Wrong!");
                        setTimeout(function () {
                            score = score + 1;
                            stage = 4;
                            fin();
                            img1.style.visibility = "hidden";
                            img2.style.visibility = "hidden";
                        }, 2000);
                    }
                }
            }
        }
    });
    setTimeout(function () {
        type("I will give you a description...")
    }, 3000);

    setTimeout(function () {
        type("You will give the correct answer...")
    }, 6000);

    setTimeout(function () {
        type("Let's begin.")
    }, 9000);

    setTimeout(function () {
        game_start();
    }, 12000);
}

function game_start() {
    type("Bright... Sunny... Clear...")
    setTimeout(function () {
        var img1 = document.createElement("img");
        var img2 = document.createElement("img");
        var txt1 = document.createElement("h1");
        var txt2 = document.createElement("h1");
        txt1.textContent = "1";
        txt2.textContent = "2";
        txt1.setAttribute("id", "txt1");
        txt2.setAttribute("id", "txt2");
        img1.setAttribute("id", "img1");
        img2.setAttribute("id", "img2");
        img1.className = "pictures";
        img2.className = "pictures";
        img1.src = "img/bright_sunny.webp";
        img2.src = "img/dark_clouds.jpg";
        var container1 = document.getElementById("pic1");
        var container2 = document.getElementById("pic2");
        container1.appendChild(img1);
        container1.appendChild(txt1);
        container2.appendChild(img2);
        container2.appendChild(txt2);
    }, 2000);
    waiting = true;
}

function stage2() {
    type("Organic... Green... Natural...")
    setTimeout(function () {
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        img1.src = "img/forest.webp";
        img2.src = "img/city.jpg";
        img1.style.visibility = "visible";
        img2.style.visibility = "visible";
    }, 2000);
    waiting = true;
}

function stage3() {
    type("Death... End... Rot...")
    setTimeout(function () {
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        img1.src = "img/life.jpg";
        img2.src = "img/skull.jpg";
        img1.style.visibility = "visible";
        img2.style.visibility = "visible";
    }, 2000);
    waiting = true;
}

function fin() {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    txt1.remove();
    txt2.remove();
    type("One more test...")
    setTimeout(function () {
        type("Almost done...")
    }, 3000);
    setTimeout(function () {
        window.sessionStorage.setItem("score", score);
        window.location.href = "../game3/rev.html";
    }, 6000);
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