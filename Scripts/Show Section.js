
// This script is used in the Recipe page.
// It shows sections on click
// adsu

function showSection(parent) {
    let sibling = parent.nextElementSibling.style;
    if (sibling.display !== "grid") {
        sibling.display = "grid";
    } else {
        sibling.display = "none";
    }
}