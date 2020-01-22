// Global array
var numArray;

// Function
function selectNumber(num){
    // push num onto array.
    numArray.push(num);

    // Loops
    for (var i = 0; i < num; i++) {
        document.getElementById("centerText").innerHTML += ("This is via a loop. " + (num - (i + 1)) + " more times." + "<br>");
      }
    
    document.getElementById("centerText").innerHTML += ("Complete. <br>");
     
    // Conditional Statement
    if(num % 2 == 0){
        document.getElementById("centerText").style.color = "blue";
    }
    else{
        document.getElementById("centerText").style.color = "red";
    }
}

// Displays array in third column.
function displayArray(){
    for (var i = 0; i < numArray.length(); i++){
        document.getElementById("rightText").innerHTML += numArray[i] + "<br>";
    }
}