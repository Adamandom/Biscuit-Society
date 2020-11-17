// Scroll to top script
// by Adam Sutherland

window.onscroll = (showToTop);

function showToTop() {
    let buttonState = document.getElementById("returnToTop").style;
    
    if (document.documentElement.scrollTop > 700) {
        buttonState.display = "block";
    }
    else {
        buttonState.display = "none";
    }
};


// a basic return to top function
function goTo(pos) {
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
}