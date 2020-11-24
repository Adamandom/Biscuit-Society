// Toggle Dark/ Contrast Mode 
// - Adam

// Content path for images
var lightModeContentPath = "Content/Vector Graphics/";

var darkButton = document.getElementById("darkModeButton");
var contrastButton = document.getElementById("contrastModeButton");
var header = document.getElementById("header_Main");

var settings = {
    darkMode: true,
    contrastMode: true,
};

// empty root added
var root = document.createElement("style");
document.body.appendChild(root);

// the color themes
const darkTheme = `
:root {
    --color-section: #3dcb8c;
    --color-div: #001923;

    --color-dark: #001923;
    --color-mid: #3dcb8c;
    --color-bright: #3bff9e;

    --color-shadow: #00192377;
    --color-hovered: #58011F;
    --color-submit: #B70057;

    --border-05: solid 0.5em #001923;
}

body {
    background-color: var(--color-div);
}

span {
    color: var(--color-hovered);
}

.nav_Tab {
    filter: hue-rotate(130deg);
}
.nav_HomeTab {
    filter: hue-rotate(130deg);
}

.intro_graphic {
    filter: hue-rotate(180deg) brightness(0.8);
}

.header_buttons {
    filter: hue-rotate(300deg);
}

.section_icon {
    filter: invert(1);
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
    if (settings.contrastMode === false) {
        toggleContrastMode();
    }

    if (settings.darkMode === false) {
        // turn off 
        settings.darkMode = true;
        darkButton.src = lightModeContentPath + "darkOff.svg";
        header.src = lightModeContentPath + "Header.svg";

        root.innerHTML = "";
    }
    else {
        // turn on 
        settings.darkMode = false;
        darkButton.src = lightModeContentPath + "darkOn.svg";
        header.src = lightModeContentPath + "header-dark.svg";
        // add theme to root
        document.body.appendChild(root);
        root.innerHTML = darkTheme;
    }   
}

// toggles contrast mode on
function toggleContrastMode() {
    if (settings.darkMode === false) {
        toggleDarkMode();
    }

    if (settings.contrastMode === false) {
        // turn off 
        settings.contrastMode = true;
        contrastButton.src = lightModeContentPath + "contrastOff.svg";
        root.innerHTML = "";

        // return constant graphics to normal
    }
    else {
        // turn on 
        settings.contrastMode = false;
        contrastButton.src = lightModeContentPath + "contrastOn.svg";
        // add theme to root
        document.body.appendChild(root);
        root.innerHTML = contrastTheme;
        document.getElementsByClassName("nav_Tab").style.filter = "saturate(10)";
    }   
}
