// Toggle Dark/ Contrast Mode 
// - Adam

document.body.appendChild( document.createElement("style") );

// Content path for images
const lightModeContentPath = "Content/Vectors/Misc/";

// color themes are stored as strings.
const darkTheme = `
:root {
    --color-section: #3dcb8c;
    --color-div: #001923;

    --color-dark: #001923;
    --color-mid: #3dcb8c;
    --color-bright: #3bff9e;

    --color-shadow: #00192377;
    --color-hovered: #b7ff26;
    --color-submit: #b70057;

    --border-05: solid 0.5em #001923;
}

body {
    background-color: var(--color-div);
}

span {
    color: var(--color-hovered);
}

.nav_tab,
#music_button {
    filter: hue-rotate(130deg);
}
.nav_hometab {
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
`
const contrastTheme =  `
:root {
    --color-section: yellow;
    --color-div: black;

    --color-dark: black;
    --color-mid: white;
    --color-bright: white;
    --color-span: red;

    --color-shadow: #000000DD;
    --color-hovered: cyan;
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

#header_image {
    filter: hue-rotate(280deg) saturate(10);
}

.nav_tab,
.section_icon {
    filter: invert(1) saturate(0) contrast(5);
}

.nav_hometab,
.header_buttons,
.intro_section img,
.intro_graphic,
#music_button {
    filter: saturate(0) contrast(5);
}
`;

// initialise bools
if (typeof darkMode === "undefined") {
    var contrastMode = false;
    var darkMode = false;
}

var DarkMode = {
    turnOn: function() {
        if (contrastMode) {
            HighContrast.turnOn();
        }
    
        if (darkMode) {
            // turn off 
            darkMode = false;
            document.getElementById("darkModeButton").src = lightModeContentPath + "Off/dark.svg";
            document.getElementById("header_image").src = "Content/Vectors/Header/Header.svg";
            document.getElementsByTagName("style")[0].innerHTML = "";
        }
        else {
            // turn on 
            darkMode = true;
            document.getElementById("darkModeButton").src = lightModeContentPath + "On/dark.svg";
            document.getElementById("header_image").src = "Content/Vectors/Header/Dark Header.svg";
            // add theme to root
            document.getElementsByTagName("style")[0].innerText = darkTheme;
        }   
    },
}

var HighContrast = {
    turnOn:  function() {
        if (darkMode) {
            DarkMode.turnOn();  
        }
    
        if (contrastMode) {
            // turn off 
            contrastMode = false;
            document.getElementById("contrastModeButton").src = lightModeContentPath + "Off/contrast.svg";
            document.getElementById("header_image").src = "Content/Vectors/Header/Header.svg";
            document.getElementsByTagName("style")[0].innerHTML = "";
        }
        else {
            // turn on 
            contrastMode = true;
            document.getElementById("contrastModeButton").src = lightModeContentPath + "On/contrast.svg";
            document.getElementById("header_image").src = "Content/Vectors/Header/Dark Header.svg";
            // add theme to root
            document.getElementsByTagName("style")[0].innerHTML = contrastTheme;
        }   
    },
}

// event listeners
document.getElementById("darkModeButton").addEventListener("click", DarkMode.turnOn);
document.getElementById("contrastModeButton").addEventListener("click", HighContrast.turnOn);
