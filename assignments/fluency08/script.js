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
function startGame() {
    for (var i = 0; i < 3; i++) {
        var divNum = Math.floor(Math.random() * 9) + 1;
        loadSquare(divNum);
        console.log(divNum);
    }
}

function checkSquare(divNum) {
    if (myMap.get(divNum) === '1'){
        shrinkSquare(divNum);
    }
}

function loadSquare(divNum){
    myMap.set(divNum, '1');
    document.getElementById("cell" + divNum).style.width = '100px';
    document.getElementById("cell" + divNum).style.height = '100px';
}

function shrinkSquare(divNum) {
    myMap.set(divNum, '0');
    document.getElementById("cell" + divNum).style.width = '0px';
    document.getElementById("cell" + divNum).style.height = '0px';

}

function checkConditions(){
    for (var i = 0; i < myMap.size; i++) {
        if (myMap.has(1)){
            break;
        }
    }
}