//Keeps track of stuff
var hp = 100;
var gold = 0;
var numberDefeated = 0;
var firstTime = true;
$(document).ready(setup);
function setup() {
    $(".ogres").append("<h1>Welcome to Ogre Fighter v.1.1</h1>");
    //add stats
    //TODO: add stat values
    $(".ogres").append("<h3>STATS</h3><p id='stats'></p>");
    //Add attack button
    // THe onlick='attack' adds an attribute to this JQuery method. Meaning when the button is clicked the attack function is called.
    $(".ogres").append("<button onclick='attack()'>Attack the Ogre!</button>");
    updateStats();
}

function updateStats() {
    $("#stats").text("HP: " + hp + " | Gold: " + gold +  " | Ogres Slain: " + numberDefeated);
}


function attack() {
    if (firstTime === true) {
        $(".ogres").append("<div id='current'> Current turn: </div>");
    //Add container for ogre images
        $(".ogres").append("<div id='ogres'></div>");
        $("#ogres").append("<p class='text'></p>");
        $("#ogres").append("<img class='pics'>");
        console.log("Are you working");
        
    }
    if (hp > 0) { // if player is still alive.
        // Interesting random function. It is so simple. 
        if (Math.random() * 100 > gold) {
            gold+=10;
            numberDefeated++;
            // add to webpage
            // Puts text before a picture.
            $(".text").text("You won! +10 gold");
            spawnGold();
        } else {
            gold--;
            hp--;
            $(".text").text("You lost! -1 gold -1 HP");
            spawnOgre();
        }
        updateStats();
    } else {
        $("#ogres").prepend("<p>GameOver</p>");
    }
    firstTime = false;
}

function spawnOgre() {
    $(".pics").attr('src', 'http://www.52insk.com/wp-content/uploads/2015/08/Shrek.jpg');
    
}


function spawnGold() {
    $(".pics").attr('src', 'gold.jpg');
}
//Add game title.
//Add game info.
//Add the stats
//Add Ogre Image;
//When the player clicks the button
//if the player has hp
//if the player defeats the ogre
//Add paragraph saying "you win
//+ Gold to player
//

