function selectNumber(num){
    for (var i = 0; i < num; i++) {
        document.getElementById("centerText").innerHTML += ("This is via a loop. " + (num - (i + 1)) + " more times." + "<br>");
      }
        document.getElementById("centerText").innerHTML += ("Complete. <br>");

      if(num % 2 == 0){
        document.getElementById("centerText").style.color = "blue";
      }
      else{
        document.getElementById("centerText").style.color = "red";
      }
}