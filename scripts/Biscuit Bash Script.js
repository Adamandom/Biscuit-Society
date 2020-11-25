var counter = 0; // keeps track of number of clicks
var counterElement = document.getElementById("counter");

var upgradeIndex = 0;

var currentBiscuit = document.getElementById("currentBiscuit");
var contentPath = "Content/Biscuit Bash/Cookies/";

var soundPath = "Content/Biscuit Bash/Sounds/";

// list of upgrades
// type: true = upgrade ; false = cookie
const upgrades = [
    {
        name: "Double Click",
        func: function() {return multiClick(2)},
        type: true,
        unlocked: false,
        desc: "Chance to double click!",
    },
    {
        name: "Quad Click",
        func: function() {return multiClick(4)},
        type: true,
        unlocked: false,
        desc: "Chance to quadruple click!",
    },
    {
        name: "A Nibble To The Past",
        image: contentPath + "NibbleZelda.svg",
        func: function() {
            let total = 0;
            for (i=0; i<8; i++) {
                if (randint(100) > 90) {
                    total++;
                }
            }
            return total * 8;
        },
        type: false,
        unlocked: false,
        desc: "It's a secret to everybody... well okay, grants a chance to go up to 64x current click!",
    },
    {
        name: "Oct Click",
        func: function() {return multiClick(8)},
        type: true,
        unlocked: false,
        desc: "Chance to octuple click!",
    },
];

// unlocks. Removed when goal reached. Place in order.
const unlocks = [
    {
        name: "Double Click",
        requirement: 5,
    },

    {
        name: "Quad Click",
        requirement: 10,
    },

    {
        name: "A Nibble To The Past",
        requirement: 20,
    },
    {
        name: "Oct Click",
        requirement: 50,
    },
];

// reference to cookie upgrades go in here
var availableCookies = [
    {
        name: "Default Andy",
        image: contentPath + "defaultAndy.svg",
        func: function() {
            return 0;
            // code block
        },
        type: false,
        unlocked: true,
        desc: "Your companion. We definitely won't make you burn it.",
    },];
// reference to upgrades upgrades go in here
var availableUpgrades = [];

var currentPower = { name: "None", image: contentPath + "lightIcon.svg", desc: "You don't have an upgrade!", func: function() { return 1 } };
var currentCookie = availableCookies[0];

// entry point
function clickedCookie() {
    playSound();
    let modifier = 1 * currentPower.func() + currentCookie.func()
    counter += modifier;
    counterElement.value = counter;
    checkUnlocks();
    nextUp();
}

// plays little sound on click
function playSound() {
    let sound = document.getElementsByTagName("audio")[0];
    let rng = Math.floor(Math.random() * 5); 
    sound.src = soundPath + "sound" + rng + ".mp3";

    sound.play();
}

// handles the next up section
function nextUp() {
    let goal = document.getElementById("nextUnlock");
    if (unlocks.length === 0) {
        goal.src = contentPath + "Completed.svg";
        goal.nextElementSibling.innerText = "all done!";
    }

    else {
        goal.src = upgrades[upgradeIndex].image;
        goal.nextElementSibling.innerText = "in " + (unlocks[0].requirement - counter) + " clicks";
    }


}


// checks list of unlocks
function checkUnlocks() {
    let unlockSound = document.getElementsByTagName("audio")[2];

    if (counter >= unlocks[0].requirement) {
        if (upgrades[upgradeIndex].type) {
            unlockSound.src = soundPath + "unlock.mp3";
        }
        else {
            unlockSound.src = soundPath + "biscuit unlock.mp3";
        }
        
        unlockSound.play();

        alert("you unlocked " + unlocks[0].name + "!!");         
        activatePower();
        unlocks.shift();           
    }
}



// allows selection of power in side panel
function activatePower() {
    // if upgrade
    if (upgrades[upgradeIndex].type) {
        var radio = document.getElementsByName("upgrade")[availableUpgrades.length];
        availableUpgrades.push(upgrades[upgradeIndex]);
    }
    // if cookie
    else if (!upgrades[upgradeIndex].type) {
        var radio = document.getElementsByName("cookie")[availableCookies.length];
        availableCookies.push(upgrades[upgradeIndex]);
    }  

    radio.disabled = false;
    radio.previousElementSibling.innerText = upgrades[upgradeIndex].name;
    upgradeIndex++; 
}

// returns a pseudo random in. Max parameter affects the max range and therefore likelihood of
// successful outcome
function randint(max) {
    return Math.floor(Math.random() * max);
}

function multiClick(multiplier) {
    if (randint(100) > 80) {
        return multiplier;
    }
    else {
        return 1;
    }
}

// handles changing cookies with radio buttons
function cookieChange(biscuitChoice) {
    currentCookie = availableCookies[Number(biscuitChoice.id)];
    document.getElementById("currentBiscuit").src = availableCookies[Number(biscuitChoice.id)].image;
    document.getElementById("panelBiscuit").src = availableCookies[Number(biscuitChoice.id)].image;
}
// handles changing upgrades with radio buttons
function upgradeChange(upgradeChoice) { 
    currentPower = availableUpgrades[Number(upgradeChoice.id)];
    document.getElementById("panelUpgrade").src = availableUpgrades[Number(upgradeChoice.id)].image;
}

// gets the information for the modal then displays
function getModal(panel) {
    let title = document.getElementById("modal_title");   
    let container = title.parentElement; 
    let text = title.nextElementSibling;
    let image = title.previousElementSibling;

    if(panel.id === "panelBiscuit") {
        container.style.background = "var(--color-section)";
        title.style.color = "var(--color-dark)";
        text.style.color = "var(--color-dark)";

        title.innerText = currentCookie.name;
        text.innerText = currentCookie.desc;
        image.src = currentBiscuit.src;
    }
    else if (panel.id === "panelUpgrade") {
        container.style.background = "var(--color-div)";
        title.style.color = "var(--color-bright)";
        text.style.color = "var(--color-bright)";

        title.innerText = currentPower.name;
        text.innerText = currentPower.desc;
        image.src = panel.src;
    }
    showGameModal();
}