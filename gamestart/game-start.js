function getData() {
    var data = window.localStorage.getItem("name");
    if (data) {
        var h1 = document.createElement("h1");
        h1.innerText = data;
        document.getElementById("container").appendChild(h1);
    }
}

window.onload = getData;