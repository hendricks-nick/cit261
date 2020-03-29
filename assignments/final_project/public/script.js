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
        '<div id="matchGameContainer">' +
        '</div>';
    
    // iterate through cardPlace array to place cards
    for(var i = 0; i < 12; i++){
        document.getElementById("matchGameContainer").innerHTML +=
            '<div class="cardContainer">' +
            '   <div class="cardImage" style="background-image: url(./public/img/card' + cardPlace[i] + '.png); background-repeat: no-repeat;width: 200px;height: 200px;">' +
            '       <div class="cardCover"></div>' +
            '   </div>' +
            '</div>';
    }

}