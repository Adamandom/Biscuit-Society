// Toggle Dark/ Contrast Mode 
// - Adam

var contentPath = "Content/Vector Graphics/";

var contrastModeOn = false;
var darkModeOn = false;

function toggleContrastMode() {
    // turns dark mode off if on
    if (darkModeOn) {
        toggleDarkMode();
    }

    if (contrastModeOn) {
        contrastModeOn = false;

        contrastModeButton.src = contentPath + "contrastOff.svg";   
        document.getElementsByTagName("html")[0].style.filter = "saturate(1)";  
    }
    else {
        contrastModeOn = true;
        
        contrastModeButton.src = contentPath + "contrastOn.svg";
        document.getElementsByTagName("html")[0].style.filter = "saturate(10)";    
    }
}


function toggleDarkMode() {
    // turns contrast mode off if on
    if (contrastModeOn) {
        toggleContrastMode();
    } 

    if (darkModeOn) {
        darkModeOn = false;
        darkModeButton.src = contentPath + "darkOff.svg";
        document.getElementsByTagName("html")[0].style.filter = "saturate(1)";       
    }
    else {
        darkModeOn = true;
        darkModeButton.src = contentPath + "darkOn.svg";
        document.getElementsByTagName("html")[0].style.filter = "saturate(0)";   
    }
}

