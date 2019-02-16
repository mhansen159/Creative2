document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);


const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=3c5df56b882056da253a2dc016079148";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      
      let results = "";
      results += 'Current Weather in ' + json.name;
      results += ": Wind: " + json.wind.deg + "&deg; with speed of " + json.wind.speed;
      results += ', Temperature: ' + json.main.temp + " &deg;F with a "
      for (let i=0; i < json.weather.length; i++) {
	results += json.weather[i].description
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      for (let i=0; i < json.weather.length; i++) {
	results += '<br><img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }

      document.getElementById("weatherResults").innerHTML = results;
    });


const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=3c5df56b882056da253a2dc016079148";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      for (let i=0; i < json.list.length; i++) {
	forecast += "<div class=\"content\">" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a<br>');
	
        forecast += "Wind: " + json.list[i].wind.deg + "&deg; with speed of " + json.list[i].wind.speed;
	forecast += "<br>Temperature: " + json.list[i].main.temp + "&deg;";
	forecast += '<br><img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });
});
