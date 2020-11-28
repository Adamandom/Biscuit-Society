  // ================================= //
 // Biscuit Bash - by Adam Sutherland //
// ================================= //

var counter = 0; // keeps track of number of clicks
var upgradeIndex = 0; // current position in the upgrades array

// for ease of access
var currentBiscuit = document.getElementById("currentBiscuit");
var counterElement = document.getElementById("counter");

// Paths to Images and Sounds
var contentPath = "Content/Raster/BiscuitBash/";
var soundPath = "Content/Sounds/";


  // ================= //
 // Arrays of Objects //
// ================= //

// list of all upgrades
const upgrades = [
    {
        name: "Twin Twirl Trouble",
        image: contentPath + "double.png",
        func: function() { return ( randint(200) ) ? 2 : 1; },
        type: true,
        desc: "Prepare for trouble... and make my clicks double?",
    },
    {
        name: "One Small Savour",
        image: contentPath + "osf.png",
        func: function() { let total = 0; (randint(1000)) ? counter += 20 : total ++; return total;},
        type: true,
        desc: "Let us help by pushing you along. Don't worry, there's no 50 hour quest across Gielenor attached. Chance to increase counter by 20!",
    },
    {
        name: "Nice Guy",
        image: contentPath + "nice.png",
        func: function() {
            switch(counter) {
                case 3000:
                case 776:
                case 490:
                case 360:
                case 1945:
                case 1918:
                case 432:
                case 449:
                case 2002:
                case 1969:
                case 1985:
                    return 250;
                default:
                    return (randint(1000)) ? 30 : 1;  
            }
        },
        type: false,
        desc: "M'lady. Offers a massive boost on important history dates. otherwise, acts as a second push",
    },
    {
        name: "Quadruple Click",
        image: contentPath + "quad.png",
        func: function() { return randint(400) ? 4 : 1 },
        type: true,
        desc: "A gunslinger in Naples is shuddering. chance for a 4x modifier!",
    },
    {
        name: "A Nibble To The Past",
        image: contentPath + "zelda.svg",
        func: function() {
            let total = 1;
            for (i=0; i<7; i++) {
                if (randint(800)) {
                    total++;
                }
            }
            return total * 8;
        },
        type: false,
        desc: "It's a secret to everbody! Well okay... grants a chance to get upwards of x64 click!",
    },
    {
        name: "Platinum Chip Cookie",
        image: contentPath + "plat.png",
        func: function() { return randint(200) ? 25 : -25},
        type: true,
        desc: "Ring-a-ding-ding, baby! Gain or lose 25x cookie modifier",
    },
    {
        name: "Cave Storeo",
        image: contentPath + "cave.png",
        func: function() {
            let total = 0;
            for (i=0; i<16; i++) {
                if(randint(500)) {
                    total -= 20;
                }
                else {
                    total += 10;
                }
            }
            return total;
        },
        type: false,
        desc: "No, not the game with the funny font skeleton. Chance to get up to 160+ modifier... and down to -320!",
    },
    {
        name: "Octo Click",
        image: contentPath + "oct.png",
        func: function() { return randint(400) ? 8 : 1 },
        type: true,
        desc: "8 FANTASTIC SIDES, 8 AWESOME ANGLES. Chance for 8x modifier",
    },
    {
        name: "Qwerty Chocoloate Finger",
        image: contentPath + "ee.png",
        func: function() {
            if ( randint(150) ){
                    if ( randint(150) ) {
                            return ( randint(200) ) ? 100 : (-100);
                    }
                    else {
                        let total = 0;
                        for (i=0; i<16; i++) {
                        if(randint(300)) {
                            total -= 50;
                                }
                                else {
                                    total += 100;
                                }
                            }
                        return total;
                        }
                    }     
            else { return 16; }
        },
        type: false,
        desc: "Big climb, big fall. Chance to activate either Cave Storeo or Platinum Chip Cookie. Otherwise, returns 16x modifier.",
    },
    {
        name: "Void Tart",
        image: contentPath + "void.png",
        func: function() { 
            let total = 250;
            for (i=0; i<availableUpgrades.length; i++) {
                if (randint(500)) {
                    total += availableUpgrades[i].func();
                }
            }    
            return total;
        },
        type: true,
        desc: "Higher beings, this treat is for you alone. Chance to activate each upgrade ability, each roll is independent.",
    },
    {
        name: "THE WORLD",
        image: contentPath + "world.png",
        func: function() { 
            let total = 500;
            for (i=0; i<availableCookies.length; i++) {
                if (randint(10000)) {
                    total += availableCookies[i].func();
                }
            }    
            return total;
        },
        type: false,
        desc: "I am thou... Thou art I... together we shall achieve heaven... Chance to activate each cookie ability, each roll is independent",
    }

    
    
];
// list of all unlocks
const unlocks = [
    {
        name: "Twin Twirl Trouble",
        requirement: 50,
    },
    {
        name: "One Small Savour",
        requirement: 250,
    },
    {
        name: "Nice Guy",
        requirement: 500,
    },
    {
        name: "Quadruple Click",
        requirement: 1500,
    },
    {
        name: "A Nibble To The Past",
        requirement: 2500,
    },
    {
        name: "Platinum Chip Cookie",
        requirement: 4000,
    },
    {
        name: "Cave Storeo",
        requirement: 6000,
    },
    {
        name: "Octo Click",
        requirement: 11037,
    },
    {
        name: "Qwerty Chocolate Finger",
        requirement: 20000,
    },
    {
        name: "Void Tart",
        requirement: 60000,
    },
    {
        name: "THE WORLD",
        requirement: 7777777,
    },
];

// Cookies are pushed into here
var availableCookies = [
    {
        name: "Companion Cookie",
        image: contentPath + "companion.png",
        func: function() {
            if (currentPower.name === "Void Tart") {
                return (randint(1000) ? 1000 : 50 );
            }
            return 1;
        },
        type: false,
        desc: "Your companion. We definitely won't make you burn it. Pairs well with an ability associated with higher beings...",
    },];
// Upgrades are pushed into here
var availableUpgrades = [];

// the current powers = selected powers. Start with default values.
var currentPower = { name: "None", image: contentPath + "none.png", desc: "You don't have an upgrade!", func: function() { return 1 } };
var currentCookie = availableCookies[0];


  // ========== //
 //  Functions //
// ========== //

// RNG (higher max = lower chance)
var randint = (max) => (Math.floor(Math.random() * max) > 100) ? false : true;

// handles the "next up" section below counter
function nextUp() {
    let goal = document.getElementById("nextUnlock");
    if (unlocks.length === 0) {
        if (counter >= 77777777) {
            clearInterval(Interval); // stops timer
            document.getElementById("timer").style.color = "var(--color-div)";
            goal.src = contentPath + "Completed.svg";
            goal.style.filter = "none";
            goal.nextElementSibling.innerText = "COMPLETE!!!";
        }
        else {
            goal.src = contentPath + "Completed.svg";
            goal.nextElementSibling.innerText = "go for..." + (77777777 - counter);
        }

        
    }

    else {
        goal.src = upgrades[upgradeIndex].image;
        goal.nextElementSibling.innerText = "in " + (unlocks[0].requirement - counter) + " clicks";
    }
}


// checks list of unlocks and plays sound
function checkUnlocks() {
    let unlockSound = soundPath;
    let audio = document.getElementsByTagName("audio")[2];

    if (unlocks.length > 0 && counter >= unlocks[0].requirement) {
        // if upgrade
        if (upgrades[upgradeIndex].type) {
            unlockSound += "upgrade";
        }
        // if biscuit
        else {
            unlockSound += "biscuit";
        }
        unlockSound += " unlock.mp3";

        audio.src = unlockSound;
        audio.play();
        alert("you unlocked " + unlocks[0].name + "!!");  
        unlocks.shift(); // remove unlock from unlocks  

        activatePower();
    }
}


// allows selection of power (both biscuit and upgrade) in side panel
function activatePower() {
    // if upgrade
    if (upgrades[upgradeIndex].type) {
        var radio = document.getElementsByName("upgrade")[availableUpgrades.length];
        availableUpgrades.push(upgrades[upgradeIndex]);
    }
    // if cookie
    else {
        var radio = document.getElementsByName("cookie")[availableCookies.length];
        availableCookies.push(upgrades[upgradeIndex]);
    }  

    radio.disabled = false;
    radio.previousElementSibling.innerText = upgrades[upgradeIndex].name;
    upgradeIndex++; 
}



// handles changing cookies with radio buttons
function powerChange(choice) {
    // for upgrades
    if (choice.name === "cookie") {
        currentCookie = availableCookies[Number(choice.id)];
        document.getElementById("currentBiscuit").src = currentCookie.image;
        document.getElementById("panelBiscuit").src = currentCookie.image;
    }
    // for biscuits
    else {
        currentPower = availableUpgrades[Number(choice.id)];
        document.getElementById("panelUpgrade").src = currentPower.image;
    }

}


   // ============ //
  //  ENTRY POINT //
 // ============ //

function clickedCookie() {
    clickSounds(); // play sound

    let modifier = currentCookie.func() * currentPower.func(); 
    counter += modifier;
    if (counter < 0) {
        counter = 0;
    }
    counterElement.value = counter;
    
    checkUnlocks(); // checks to see if unlock goals have been reached
    nextUp(); // handles the "next up" content below the counter
}