// this script handles the functionality of the score bars
// Made by Adam Sutherland

// colors used for the score bars
var scoreColors = ["#fe1910", "#fe8910", "#fdff2c", "#befb35", "#00fc0c"];

// function called on hover of parent element with "score_container" class
function scoreBar(container) {

    // a check to make sure only one bar is added
    if (container.childNodes[1].className === "score_text") {
        container.removeChild(container.childNodes[1]); // remove "SCORE" h2 element
        
        // create and append div as child of container
        let bar = document.createElement("DIV");
        bar.className = "score_bar";
        container.appendChild(bar);

        // gets the score value (stored as title in parent element) and assigns values based on it
        let val = Number(container.title);
        let score = {
            color : scoreColors[val-1],
            width : String((val) * 18) + "%" // max val = 90%
        };
        
        // slight delay to have the bar be "animated" (there's probably a better way)
        // change transition property of "score_bar" class to adjust speed.
            window.setInterval(function() {
            bar.style.background = score.color;
            bar.style.width = score.width;
            bar.style.boxShadow = "0em 0em 0.5em" + score.color;
        }, 0);
    }
}

// Form Score Slider Color Change

// changes color depending on slider value
function sliderColor(slider) {
    let color = Math.ceil(slider.value/24);
    slider.style.background = scoreColors[color-1] + "75"; // "75" = alpha value
    document.getElementById("currentScore").innerText = color + "/5";
}