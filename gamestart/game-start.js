function getData() {
    var data = window.localStorage.getItem("name");
    if (data) {
        return data;
    }
}

function intro() {
    setTimeout(function () {
        var name = getData();
        var first = document.getElementById("first");
        first.remove();
        var second = document.createElement("h1");
        second.setAttribute("id", "second");
        second.className = "typewriter anim-name";
        second.innerHTML = name + "...";
        var container = document.getElementById("response");
        container.appendChild(second);
    }, 3000);
    setTimeout(function () {
        var second = document.getElementById("second");
        second.remove();
        var third = document.createElement("h1");
        third.setAttribute("id", "third");
        third.className = "typewriter anim-welcome";
        third.innerHTML = "Welcome to the game!";
        var container = document.getElementById("response");
        container.appendChild(third);
    }, 6000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = intro;