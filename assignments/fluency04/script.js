/*var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send();
    }
}

function weatherRequest(urlRequest) {
    var client = new HttpClient();
    console.log(urlRequest);
    client.get(urlRequest, function(response) {
        console.log(response);
        
        var obj = JSON.parse(this.responseText);

       console.log(obj);
    });
}*/

// GETWEATHER 
// function - creates URL for API request and calls function to make AJAX GET request
function getWeather(city, country){
    
    const apiKey = "081ff0cf85a3a31024f8fac0a6142051";
    var urlRequest = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
    weatherRequest(urlRequest);
}

// WEATHERREQUEST
// function - uses AJAX to request current weather from input city - console logs data.
function weatherRequest(urlRequest) {

    var xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
        console.log(this.responseText);
       var obj = JSON.parse(this.responseText);
       console.log(obj);
      }
    };
    xhttp.open("GET", urlRequest, true);
    xhttp.send();
  }