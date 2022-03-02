window.onload = intialize;

// when page loads clear the name input field
function intialize() {
    document.getElementById("textInput").value = "";
    nameElement = document.getElementById("textInput");
    nameElement.addEventListener("keydown", function(event) {
        if (event.code === "Enter") {
            userName = document.getElementById("textInput").value;
            animation();
            nameContainer = document.getElementById("input")
            setTimeout(() => {
                nameContainer.remove()
                window.localStorage.setItem("name", userName);
                window.location.href = "./gamestart/game-start.html";
            }, 2000);
        }
    });
}

function animation() {
    document.getElementById("textInput").className = 'not';
    document.getElementById("textInput").className = 'animation';
}
