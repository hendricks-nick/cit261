function getWeather(zip, country){
    const apiKey = "081ff0cf85a3a31024f8fac0a6142051";

    var urlRequest = "api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=" + apiKey;

    weatherRequest(urlRequest);
}

function weatherRequest(urlRequest) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("demo").innerHTML = this.responseText;
          console.log(this.responseText);
      }
      else {
          console.log(this.responseText);
      }
    };
    xhttp.open("GET", urlRequest , true);
    xhttp.send();
  }

  // form > getWeather > make request > update HTML