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

function getWeather(zip, country){
    const apiKey = "081ff0cf85a3a31024f8fac0a6142051";

    var urlRequest = "https://reqres.in/api/users?page=2";

    console.log(urlRequest);
    weatherRequest(urlRequest);
}

function weatherRequest(url) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
   };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

/*
function weatherRequest(urlRequest) {
    var client = new HttpClient();
    console.log(urlRequest);
    client.get(urlRequest, function(response) {
        console.log(response);
    });
}
*/

  // form > getWeather > make request > update HTML