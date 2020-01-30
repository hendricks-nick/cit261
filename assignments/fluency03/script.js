function getJSON() {

    var xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          document.getElementById("leftCol").innerHTML = "JSON File: <br> <br>" + this.responseText;
          var obj = JSON.parse(this.responseText);
          document.getElementById("centerCol").innerHTML = "Parsed: <br> <br>" + obj.fruit + " <br>" + obj.size + " <br>" + obj.color + " <br>";
      }
    };
    xhttp.open("GET", "json.txt", true);
    xhttp.send();
  }