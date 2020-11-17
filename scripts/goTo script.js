
// returns to the scroll position of the value of pos (0 = top)
function goTo(pos) {
    window.scrollTo({
        top: pos,
        behavior: "smooth"
    });
}