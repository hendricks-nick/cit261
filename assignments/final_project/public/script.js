function loadHome() {
    console.log("Page Loaded");
    let games = ["Match", "SquareClear", "Bubbles"];

    document.getElementById("bodyContainer").innerHTML = "";
    for(var i = 0; i < games.length; i++){
        document.getElementById("bodyContainer").innerHTML += 
        '<div class="gameContainer">'
        '   <div class="gameTitle">' + games[i] + '</div>'
        '   <div class="gameImage">'
        '       <img src="/public/img/' + games[i].toLowerCase() + '.png" alt="' + games[i] + '" onclick="loadGames(\'' + games[i] + '\')"'
        '   </div>'
        '</div>';
    }
    
}

function menuChange(divObj) {
    divObj.classList.toggle("change");
}