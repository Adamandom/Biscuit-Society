// Toggle Dark/ Contrast Mode 
// - Adam

// Content path for images
var contentPath = "Content/Vector Graphics/";

var darkButton = document.getElementById("darkModeButton");
var contrastButton = document.getElementById("contrastModeButton");

var darkMode = false;
var contrastMode = false;
var settings = [];

// empty root added
var root = document.createElement("style");
document.body.appendChild(root);

function importSettings() {
    // if settings unset, set them
    alert(window.localStorage.getItem("darkMode"));
    if (localStorage.getItem("darkMode") === "null") {
        localStorage.setItem("darkMode", "true");
        localStorage.setItem("contrastMode", "true");
    }
    else {
        darkMode = (window.localStorage.getItem("darkMode")) ? true : false;
        contrastMode = (window.localStorage.getItem("contrastMode")) ? true : false;
    }

    
    settings = [darkMode, contrastMode];
}
// set current settings


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

// Turns DM on
function toggleDarkMode() {
    importSettings();
    if (settings[0] === false) {
        // turn off 
        settings[0] = true;
        darkButton.src = contentPath + "darkOff.svg";
        document.body.removeChild(root);
    }
    else {
        // turn on 
        settings[0] = false;
        darkButton.src = contentPath + "darkOn.svg";
        // add theme to root
        document.body.appendChild(root);
        root.innerHTML = darkTheme;
    }
    
    window.localStorage.setItem("darkMode", String(settings[0]));
   
}