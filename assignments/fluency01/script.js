function selectNumber(num){
    for (var i = 0; i < num; i++) {
        document.getElementsById("centerText").innerHTML += ("This is via a loop. " + (num - i) + " more times." + "<br>");
      }
      document.getElementsById("centerText").innerHTML += ("Complete. <br>");

      if(num % 2 == 0){
        document.getElementsById("centerText").style.color = "blue";
      }
      else{
        document.getElementsById("centerText").style.color = "red";
      }
}