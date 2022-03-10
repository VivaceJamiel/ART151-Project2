function intro() {
    setTimeout(function () {
        type("You will answer true or false based on what you know...");
    }, 3000);
    setTimeout(function () {
        type("This will determine the outcome of the tests");
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