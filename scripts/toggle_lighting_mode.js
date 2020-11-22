// Toggle Dark/ Contrast Mode 
// - Adam

// Content path for images
var lightModeContentPath = "Content/Vector Graphics/";

var darkButton = document.getElementById("darkModeButton");
var contrastButton = document.getElementById("contrastModeButton");

var darkMode = false;
var contrastMode = false;
var settings = [];

// empty root added
var root = document.createElement("style");
document.body.appendChild(root);

// the color themes
const darkTheme = `
:root {
    font-size: 14px;

    --font-title: Grandstander;
    --font-body: Montserrat;

    --weight-bold: 800;
    --weight-mid: 600;

    --color-section: red;
    --color-div: yellow;

    --color-dark: black;
    --color-mid: brown;
    --color-bright: white;

    --color-shadow: black;
    --color-hovered: orange;
    --color-submit: green;

    --rounding-section: 5em;
    --rounding-div: 2.5em;
    --border-05: solid 0.5em black;
}
`;
const contrastTheme = `
:root {
    --color-section: yellow;
    --color-div: black;

    --color-dark: black;
    --color-mid: white;
    --color-bright: white;
    --color-span: red;

    --color-shadow: #000000DD;
    --color-hovered: red;
    --color-submit: red;

    --rounding-section: 5em;
    --rounding-div: 2.5em;
    --border-05: solid 0.5em black;
}

.review_head {
    box-shadow: none;
}
[alt="altReview"] .review_head {
    box-shadow: none;
}
::placeholder {
    opacity: 1;
}
#returnToTop:hover {
    border-color: black;
    background: white;
}

header {
    box-shadow: black 0 0 0 1em;
}

.header_Main {
    filter: hue-rotate(240deg) contrast(5) invert(1) saturate(10);
}

.nav_Tab,
.section_icon {
    filter: invert(1) saturate(0) contrast(5);
}

.nav_HomeTab,
.game_section img,
.header_buttons,
.intro_section img {
    filter: saturate(0) contrast(5);
}

`;

// Turns DM on
function toggleDarkMode() {
    if (settings[1] === false) {
        toggleContrastMode();
    }

    if (settings[0] === false) {
        // turn off 
        settings[0] = true;
        darkButton.src = lightModeContentPath + "darkOff.svg";
        root.innerHTML = "";
    }
    else {
        // turn on 
        settings[0] = false;
        darkButton.src = lightModeContentPath + "darkOn.svg";
        // add theme to root
        document.body.appendChild(root);
        root.innerHTML = darkTheme;
    }   
}

// toggles contrast mode on
function toggleContrastMode() {
    if (settings[0] === false) {
        toggleDarkMode();
    }

    if (settings[1] === false) {
        // turn off 
        settings[1] = true;
        contrastButton.src = lightModeContentPath + "contrastOff.svg";
        root.innerHTML = "";

        // return constant graphics to normal
    }
    else {
        // turn on 
        settings[1] = false;
        contrastButton.src = lightModeContentPath + "contrastOn.svg";
        // add theme to root
        document.body.appendChild(root);
        root.innerHTML = contrastTheme;
        document.getElementsByClassName("nav_Tab").style.filter = "saturate(10)";
    }   
}

// turn off either mode
function turnOffMode() {

}