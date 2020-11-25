// show modal - appears on submit
// by adsu

function showModal() {
    let modal = document.getElementById("modal_container");

    modal.style.display = "grid";
    window.setInterval(function() {
        modal.style.opacity = "1";
        }, 500);

    document.getElementById("modal_container").addEventListener("click", function() {  
        modal.style.opacity = "0";
        modal.style.display = "none";
        document.getElementById("modal_container").removeEventListener("click", function() {  
            modal.style.opacity = "0";
            modal.style.display = "none";
        });
    });
}

// specifically for Biscuit Bash
// the code isnt 100% working for regular modals (it only fades in on first click per page load)
function showGameModal() {
    let modal = document.getElementById("modal_container");

    modal.style.display = "grid";
    modal.style.opacity = "1";

    document.getElementById("modal_container").addEventListener("click", function() {  
        modal.style.opacity = "0";
        modal.style.display = "none";
        document.getElementById("modal_container").removeEventListener("click", function() {  
            modal.style.opacity = "0";
            modal.style.display = "none";
        });
    });
}

