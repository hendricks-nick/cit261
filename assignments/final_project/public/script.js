function loadHome() {
    console.log("Page Loaded");
    let games = ["Match", "SquareClear", "Bubbles"];

    document.getElementById("bodyContainer").innerHTML = 
        '<div id="gameSelection">' +
        '</div>';
    for(var i = 0; i < games.length; i++){
        document.getElementById("gameSelection").innerHTML += 
        '<div class="gameContainer">' +
        '   <div class="gameTitle">' + games[i] + '</div>' +
        '   <div class="gameImage">' +
        '       <img src="./public/img/' + games[i].toLowerCase() + '.png" alt="' + games[i] + '" onclick="loadGames(\'' + games[i] + '\')"' +
        '   </div>' +
        '</div>';
    }
    
}

function menuChange(divObj) {
    divObj.classList.toggle("change");
}

function loadGames(game){
    loadingScreen(game);
    setTimeout(function(){
        if(game === 'Match'){
            matchGame();
        }
        else if(game === 'SquareClear'){
            squareGame();
        }
        else if(game === 'Bubbles'){
            bubbleGame();
        }
    }, 3000);
}

function loadingScreen(game){
    var body = document.getElementById("bodyContainer");
    body.innerHTML = 
        '<div class="loadingContainer">' +
        '   <div class="loadHeader">Loading the ' + game + ' game!</div>' +
        '   <div class="spinLoad">' +
        '   </div>' +
        '</div>';
}

// Match Game Functions
class Card {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }
}

function matchGame(){
    document.getElementById("bodyContainer").innerHTML = "";
    
    // Generate the order
    let cardPlace = [12];
    let imageUse = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};
    // Loops through each placement
    for (var i = 0; i < 12; i++){
        // ensures that each card is only used twice
        do{
            var tempVal = Math.floor(Math.random() * 6) + 1;
        }while(imageUse[tempVal] === 2);
        imageUse[tempVal] = imageUse[tempVal] + 1; 
        
        // sets card
        cardPlace[i] = tempVal;
    }

    // set game board
    document.getElementById("bodyContainer").innerHTML +=
        '<div class="tContainer"><div class="gameTitle">Card Matching Game</div></div>' +
        '<div id="matchGameContainer">' +
        '</div>';
    
    // iterate through cardPlace array to place cards
    for(var i = 0; i < 12; i++){
        document.getElementById("matchGameContainer").innerHTML +=
            '<div class="cardContainer">' +
            '   <div class="cardImage" id="'+ i +'" value="' + cardPlace[i]  + '" onclick="flipCard(this)" style="background-image: url(./public/img/card' + cardPlace[i] + '.png); background-repeat: no-repeat;width: 200px;height: 200px;">' +
            '       <div class="cardCover"></div>' +
            '   </div>' +
            '</div>';
    }
}

var cardNum = 1;
var card1;
var cardMatches = 0;
var parentDiv;
function flipCard(cardObj){
    console.log("Flipping: " + cardObj.getAttribute('value'));
    // Reveal card, stop it from being flipped back
    cardObj.classList.toggle("flip");
    cardObj.setAttribute('onclick', '');

    // Create card object to store data to compare if match is made
    if(cardNum === 1){
        card1 = cardObj;
        cardNum++;
    }
    else if (cardNum === 2){
        
        // Stops a third card or more from being flipped
        document.getElementById('matchGameContainer').style.pointerEvents = 'none';
        
        // Delays flips and actions by 2 seconds
        setTimeout(function(){
            // MATCH
            if(card1.getAttribute('value') === cardObj.getAttribute('value')){
                card1.classList.toggle("flip");
                card1.classList.toggle("found");
                card1.childNodes[1].innerHTML += 
                    '<i class="fas fa-check fa-9x"></i>';
                card1.setAttribute('cursor', ''); 

                cardObj.classList.toggle("flip");
                cardObj.classList.toggle("found");
                cardObj.childNodes[1].innerHTML += 
                    '<i class="fas fa-check fa-9x"></i>';
                
                cardMatches++;
            }
            // NO MATCH
            else{
                card1.classList.toggle("flip");
                card1.setAttribute('onclick', 'flipCard(this)');

                cardObj.classList.toggle("flip");
                cardObj.setAttribute('onclick', 'flipCard(this)');
            }
            cardNum = 1;
            document.getElementById('matchGameContainer').style.pointerEvents = '';
        }, 2000);
    }

    if(cardMatches === 6){
        cardMatches = 0;
        parentDiv = cardObj.parentNode.parentNode.parentNode;
        parentDiv.setAttribute('class','endGame');
    }
}

function squareGame(){
    document.getElementById('bodyContainer').innerHTML = 
        '<div class="tContainer"><div class="gameTitle">Clear the Squares</div></div>'  +
        '<div class="gameParentContainer">' +
        '   <div class="sqGameContainer">' +
        '       <div class="gridContainer" id="gridContainer"></div>' +
        '   </div>' +
        '</div>';

    // Generate grid
    for(var i = 1; i <= 9; i++){
        document.getElementById("gridContainer").innerHTML +=
            '<div class="container">' +
            '   <div class="cellContainer">' +
            '       <div class="gridCell" id="cell' + i + '" onclick="checkSquare(' + i + ')"></div>' +
            '   </div>' +
            '</div>';
    }
    startSqGame();
}
// 3x3 grid, when one is clicked, it empties it and fills the ones next to it.
let myMap = new Map([
    [1, '0'], 
    [2, '0'],
    [3, '0'],
    [4, '0'],
    [5, '0'],
    [6, '0'],
    [7, '0'],
    [8, '0'],
    [9, '0'],
]);

// Generates 3 random squares
function startSqGame() {
    for (var i = 0; i < 3; i++) {
        var divNum = Math.floor(Math.random() * 9) + 1;
        loadSquare(divNum);
        console.log(divNum);
    }
}

function checkSquare(divNum) {
    if (myMap.get(divNum) === '1'){
        shrinkSquare(divNum);
        swapNearby(divNum);
    }
}

function loadSquare(divNum){
    myMap.set(divNum, '1');
    let cell = document.getElementById("cell" + divNum);
    cell.style.width = '150px';
    cell.style.height = '150px';
    cell.style.cursor = 'pointer';
}

function shrinkSquare(divNum) {
    myMap.set(divNum, '0');
    let cell = document.getElementById("cell" + divNum);
    cell.style.width = '0px';
    cell.style.height = '0px';
    cell.style.cursor = '';

}

function swapNearby(divNum){
    // default all directions to true
    let sqObj = {loc: divNum, left: true, right: true, up: true, down: true};

    // check left and right squares
    if (sqObj.loc % 3 === 1){ // nothing to left
        sqObj.left = false;
    }
    else if (sqObj.loc % 3 === 0){ // nothing to right
        sqObj.right = false;
    }

    // check up and down
    if (sqObj.loc >= 1 && sqObj.loc <= 3){
        sqObj.up = false;
    }
    else if (sqObj.loc >= 7 && sqObj.loc <= 9){
        sqObj.down = false;
    }

    // Switch squares
    if (sqObj.left === true){
        invertSquare(sqObj.loc - 1);
    }
    if (sqObj.right === true){
        invertSquare(sqObj.loc + 1);
    }
    if (sqObj.up === true){
        invertSquare(sqObj.loc - 3);
    }
    if (sqObj.down === true){
        invertSquare(sqObj.loc + 3);
    }
}

function invertSquare(divNum){
    if (myMap.get(divNum) === '1'){
        shrinkSquare(divNum);
    }
    else if (myMap.get(divNum) === '0'){
        loadSquare(divNum);
    }
}

function bubbleGame(){
    document.getElementById('bodyContainer').innerHTML =
    '<div class="container">' +
	'<div class="bubbles-container">' +
    '<svg class="bubbles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 701 1024" style="overflow: visible;">' +
    '<g class="bubbles-large" stroke-width="7">' +
    '<g>' +
    '<g transform="translate(10 940)">' +
    '<circle cx="35" cy="35" r="35"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(373 940)">' +
    '<circle cx="35" cy="35" r="35"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(408 940)">' +
    '<circle cx="35" cy="35" r="35"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(621 940)">' +
    '<circle cx="35" cy="35" r="35"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(179 940)">' +
    '<circle cx="35" cy="35" r="35"/>' +
    '</g>' +
    '</g>' +
    '</g>' +
    '<g class="bubbles-small" stroke-width="4">' +
    '<g>' +
    '<g transform="translate(147 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(255 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(573 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(429 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(91 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(640 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(321 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(376 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(376 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g transform="translate(497 984)">' +
    '<circle cx="15" cy="15" r="15"/>' +
    '</g>' +
    '</g>' +
    '</g>' +
    '</svg>' +
    '</div>' +
    '<h1>Bubbles</h1>' +
'</div>';
}