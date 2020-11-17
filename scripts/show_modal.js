// show modal - appears on submit
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