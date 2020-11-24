var counter = 0; // keeps track of number of clicks
var counterElement = document.getElementById("counter");
var currentPower = () => 1;
var currentCookie = () => 0;

var upgradesRadio = 0;
var cookieRadio = 1;
var upgradeIndex = 0;

var currentBiscuit = document.getElementById("currentBiscuit");
var contentPath = "Content/Biscuit Bash/Cookies/";

// list of upgrades
// type: true = upgrade ; false = cookie
const upgrades = [
    {
        name: "Double Click",
        func: function() {return multiClick(2)},
        type: true,
        unlocked: false,
    },
    {
        name: "Quad Click",
        func: function() {return multiClick(4)},
        type: true,
        unlocked: false,
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
    },
    {
        name: "Oct Click",
        func: function() {return multiClick(8)},
        type: true,
        unlocked: false,
    },
];

// reference to cookie upgrades go in here
var availableCookies = [
    {
        name: "Default Andy",
        image: contentPath + "defaultAndy.svg",
        func: function() {
            return 1;
            // code block
        },
        type: false,
        unlocked: true,
    }
    ];
// reference to upgrades upgrades go in here
var availableUpgrades = [];

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

function upgradeChange(radio) {   
    if (radio.name === "upgrade") {
        currentPower = upgrades[Number(radio.alt)].func;
    }
}


// entry point
function clickedCookie() {
    counter += currentPower() + currentCookie();
    counterElement.value = counter;
    checkUnlocks();
}



// checks list of unlocks
function checkUnlocks() {
    if (counter >= unlocks[0].requirement) {
        upgrades[upgradeIndex].unlocked = true;
        alert("you unlocked " + unlocks[0].name + "!!"); 
        activatePower();
        unlocks.shift();           
    }
}



// allows selection of power in side panel
function activatePower() {
    if (upgrades[upgradeIndex].type) {
        var radio = document.getElementsByName("upgrade")[upgradesRadio];
        availableUpgrades.push(upgrades[upgradeIndex]);
        upgradesRadio++;
    }
    else {
        var radio = document.getElementsByName("cookie")[cookieRadio];
        availableCookies.push(upgrades[upgradeIndex]);
        cookieRadio++;
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

function cookieChange(biscuitChoice) {
    currentCookie = availableCookies[Number(biscuitChoice.id)].func;
    document.getElementById("currentBiscuit").src = availableCookies[Number(biscuitChoice.id)].image;
}

function upgradeChange(upgradeChoice) { 
    currentPower = availableUpgrades[Number(upgradeChoice.id)].func;
}
