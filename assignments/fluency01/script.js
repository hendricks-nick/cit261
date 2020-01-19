function selectNumber(num){
    for (var i = 0; i < num; i++) {
        document.getElementsByClassName("centerCol").innerHTML += ("This is via a loop. " + (num - i) + " more times." + "<br>");
      }
      document.getElementsByClassName("centerCol").innerHTML += ("Complete. <br>");

      if(num % 2 == 0){
        document.getElementsByClassName("centerCol").style.color = "blue";
      }
      else{
        document.getElementsByClassName("centerCol").style.color = "red";
      }
}