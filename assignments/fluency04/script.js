var HttpClient = function() {
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

function getWeather(city, country){
    const apiKey = "081ff0cf85a3a31024f8fac0a6142051";

    var urlRequest = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=081ff0cf85a3a31024f8fac0a6142051";

    console.log(urlRequest);
    weatherRequest(urlRequest);
}

function weatherRequest(urlRequest) {
    var client = new HttpClient();
    console.log(urlRequest);
    client.get(urlRequest, function(response) {
        console.log(response);
    });
}


  // form > getWeather > make request > update HTML