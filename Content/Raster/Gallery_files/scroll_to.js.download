// Scroll to top script
// by Adam Sutherland


window.onscroll = (showToTop);
// decides whether the "to top" button should be shown
function showToTop() {
    let buttonState = document.getElementById("returnToTop").style;
    
    if (document.documentElement.scrollTop > 700) {
        buttonState.display = "block";
    }
    else {
        buttonState.display = "none";
    }
};


// function receives position and smoothly scrolls there
function goTo(to) {
    // to top when to = 0
    if (typeof to === "number") {
        window.scrollTo({
            top: to,
            behavior: "smooth"
        });
    }
    
    // "to" is a string; the id of the element we're scrolling to
    let toPosition = document.getElementById(to).getBoundingClientRect();

    // offset needed to get to correct place
    let offset = toPosition.top - document.body.getBoundingClientRect().top;

    window.scrollTo({
        top: offset,
        behavior: "smooth"
    });
}