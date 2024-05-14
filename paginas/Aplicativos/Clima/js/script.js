
let weather = {
    apiKey: "6d055e39ee237af35ca066f35474e9df",
    fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
        )
        .then((response) => {
        if (!response.ok) {
            alert("Localização Inválida");
            throw new Error("Localização Inválida");
        }
        return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
    const { name } = data;
    const { icon } = data.weather[0];	
    let { temp, humidity, feels_like, temp_max, temp_min } = data.main;
    let { speed } = data.wind;
	const { country } = data.sys;
		
	
		
	let { description} = data.weather[0];
		switch (description) {
			case "mist":
				description = "Névoa";
				break;
			case "few clouds":
				description = "Poucas núvens";
				break;
			case "broken clouds":
				description = "Nublado";
				break;
			case "overcast clouds":
				description = "Nublado";
				break;
			case "scattered clouds":
				description = "Nuvens dispersas";
				break;
			case "snow":
				description = "Neve";
				break;
			case "clear sky":
				description = "Céu limpo";
				break;
			case "moderate rain":
				description = "Chuva moderada"
				break;
			case "light rain":
				description = "Chuva leve"
				break;
			case "light intensity drizzle":
				description = "Chuviscos"
				break;
			case "heavy intensity rain":
			    description = "Chuva de alta intensidade"
			    break;
			case "thunderstorm with light rain":
			    description = "Tempestade com chuva leve"
			    break;
			
			
		}
	temp = Number(temp.toFixed(1));	
	temp_min = Number(temp_min.toFixed(1));
	temp_max = Number(temp_max.toFixed(1));
	feels_like = Number(feels_like.toFixed(1));
	speed = Number(speed.toFixed(1));

	
    document.querySelector(".city").innerText = "Clima em " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Umidade: " + humidity + "%";
    document.querySelector(".wind").innerText = "Vel. vento: " + speed + " km/h";
	document.querySelector(".feels").innerText = "Sensação: " + feels_like + "ºC";
	document.querySelector(".temp-max").innerText = "Temp. Max: " + temp_max + "ºC";
	document.querySelector(".temp-min").innerText = "Temp. Min: " + temp_min + "ºC";
		document.querySelector(".pais").innerText = "País: " + country;
    document.querySelector(".weather").classList.remove("loading");	
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    },
};


let geocode = {
    reverseGeocode: function (latitude, longitude) {
    var apikey = "90a096f90b3e4715b6f2e536d934c5af";
    var api_url = "https://api.opencagedata.com/geocode/v1/json";
    var request_url =
        api_url + "?" + "key=" + apikey + "&q=" + encodeURIComponent(latitude + "," + longitude) + "&pretty=1" + "&no_annotations=1";

    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);

    request.onload = function () {
        if (request.status == 200) {
        var data = JSON.parse(request.responseText);
        weather.fetchWeather(data.results[0].components.city);
        console.log(data.results[0].components.city)
        }
         else if (request.status <= 500) {

        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log("error msg: " + data.status.message);
        }
         else {
        console.log("server error");
        }
    };

    request.onerror = function () {
        console.log("unable to connect to server");
    };

    request.send(); 
    },
    getLocation: function() {
    function success (data) {
        geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, console.error);
    }
    else {
        weather.fetchWeather("Rio de Janeiro");
    }
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
    });

weather.fetchWeather("Rio de Janeiro");

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
    });

geocode.getLocation();