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
    if(game === 'Match'){
        matchGame();
    }
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



}