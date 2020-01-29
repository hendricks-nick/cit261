function getJSON() {

    var xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          document.getElementById("leftCol").innerHTML = this.responseText;
          var obj = JSON.parse(this.responseText);
          document.getElementById("centerCol").innerHTML = obj;
      }
    };
    xhttp.open("GET", "json.txt", true);
    xhttp.send();
  }