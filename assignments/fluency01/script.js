function selectNumber(num){
    for (var i = 0; i < num; i++) {
        document.getElementsByClassName("centerCol").appendChild("This is via a loop. " + (num - i) + " more times." + "<br>");
      }
      document.getElementsByClassName("centerCol").appendChild("Complete. <br>");

      if(num % 2 == 0){
        document.getElementsByClassName("centerCol").style.color = "blue";
      }
      else{
        document.getElementsByClassName("centerCol").style.color = "red";
      }
}