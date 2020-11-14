function gameLoop() {
    function getInput() {
        let userInput = document.getElementById("userInput").value;
        document.removeEventListener("keydown", getInput);
    } 

    function displayMessage(message) {
        console = message;
    }

    var message = "";

    message = "welcome to the demo";
    window.setInterval(displayMessage, 1000, message);
    message = "please enter your name";
    window.setInterval(displayMessage, 1000, message);
    response = getInput();
}

function getData() {
    // to print to console, do "console = "text" ";
    var console = document.getElementById("interface").innerText;
    // likewise, but used to tell player what to enter
    var userPrompt = document.getElementById("userInput").placeholder;
    // retrieves input when listener is available
}
