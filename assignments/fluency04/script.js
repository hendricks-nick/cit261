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

$(document).ready(function () {
    $("#submitBtn").click(function () {
        var formData = $("#contactForm").serialize();
        $.ajax({
            type: "GET",
            url: 'api.openweathermap.org/data/2.5/weather?zip=85210&APPID=081ff0cf85a3a31024f8fac0a6142051', //serverside
            beforeSend: function () {
                //show loading image
            },
            success: function (result) {
                console.log(result); //use this to see the response from serverside
            },
            error: function (e) {
                console.log(e); //use this to see an error in ajax request
            }
        });
    });
});

function getWeather(zip, country){
    const apiKey = "081ff0cf85a3a31024f8fac0a6142051";

    var urlRequest = "api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=" + apiKey;

    console.log(urlRequest);
    weatherRequest(urlRequest);
}

function weatherRequest(urlRequest) {
    var client = new HttpClient();
    console.log(urlRequest);
    client.get('api.openweathermap.org/data/2.5/weather?zip=85210&APPID=081ff0cf85a3a31024f8fac0a6142051', function(response) {
        console.log(response);
    });
}

  // form > getWeather > make request > update HTML