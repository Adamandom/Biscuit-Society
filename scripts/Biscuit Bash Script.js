var counter = 0; // keeps track of number of clicks
var counterElement = document.getElementById("counter");

// list of upgrades
const upgrades = [
    {
        name: "Double Click",
        type: "upgrade",
        code: function() {return multiClick(2)},
        unlocked: false,
        requirement: 10
    },

    {
        name: "Quad Click",
        type: "upgrade",
        code: function() {return multiClick(4)},
        unlocked: false,
        requirement: 75
    },

    {
        name: "Oct Click",
        type: "upgrade",
        code: function() {return multiClick(8)},
        unlocked: false,
        requirement: 100
    },


];

function upgradeChange(radio) {   
    for (i=0; i<upgrades.length; i++) {
        if (i == radio.value) {
            upgrades[i].active = true;
            activePower = i;
        }
        else {
            upgrades[i].active = false;
        }
    }
}

// entry point
function clickedCookie(cookie) {
    if (typeof activePower === "number") {
        counter += upgrades[activePower].code();
    }
    else {
        counter++;
    }
    counterElement.value = String(counter);
    checkUnlocks();
}


// checks list of unlocks
function checkUnlocks() {
    for (i=0; i<upgrades.length; i++) {
        if (counter >= upgrades[i].requirement && !upgrades[i].unlocked) {
            upgrades[i].unlocked = true;
            alert("you unlocked " + upgrades[i].name + "!!"); 
            activatePower(i);
        }
    }  

    for (i=0; i<cookies.length; i++) {
        if (counter >= cookies[i].requirement && !cookies[i].unlocked) {
            cookies[i].unlocked = true;
            alert("you unlocked " + cookies[i].name + "!!"); 
            activateCookie(i);
        }
    }  
}


// allows selection of power in side power
function activatePower(number) {
    let radio = document.getElementsByName("upgrade")[number];
    radio.disabled = false;
    radio.previousElementSibling.innerText = upgrades[number].name;
}

function activateCookie(number) {
    let radio = document.getElementsByName("cookie")[number];
    radio.disabled = false;
    radio.previousElementSibling.innerText = cookies[number].name;
}

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


var currentBiscuit = document.getElementById("currentBiscuit")
var contentPath = "Content/Biscuit Bash/Cookies/";
const cookies = [
    {
        name: "Default Andy",
        image: contentPath + "defaultAndy.svg",
        code: function() {
            return 1;
            // code block
        },
        unlocked: true,
        requirement: 0,
    },
    {
        name: "A Nibble to the Past",
        image: contentPath + "NibbleZelda.svg",
        code: function() {
            return 1;
            // code block
        },
        unlocked: false,
        requirement: 20,
    },
];

function cookieChange(biscuitChoice) {
    currentBiscuit.src = cookies[biscuitChoice.value].image;
}

function loadGame() {
    
}

function saveGame() {
    let data = [
        counter
    ];

    // GOT TO HERE
    
    var saveData = new Blob(data, {type: "text/plain;charset=utf-8"});

    let fileName = "BiscuitBash-SaveData.txt";

    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    
    var downloadURL = window.URL.createObjectURL(saveData);
    a.href = downloadURL;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    
}