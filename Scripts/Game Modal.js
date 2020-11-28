// gets the information for the modal then displays

function getModal(panel) {
    let title = document.getElementById("modal_title");   
    let container = title.parentElement; 
    let text = title.nextElementSibling;
    let image = title.previousElementSibling;

    if(panel.id === "panelBiscuit") {
        container.style.background = "var(--color-section)";
        title.style.color = "var(--color-dark)";
        text.style.color = "var(--color-dark)";

        title.innerText = currentCookie.name;
        text.innerText = currentCookie.desc;
        image.src = currentBiscuit.src;
    }
    else if (panel.id === "panelUpgrade") {
        container.style.background = "var(--color-div)";
        title.style.color = "var(--color-bright)";
        text.style.color = "var(--color-bright)";

        title.innerText = currentPower.name;
        text.innerText = currentPower.desc;
        image.src = panel.src;
    }
    showGameModal();
}