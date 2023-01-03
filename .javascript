const API_KEY = "ddac230f2afb7efc280eadde99cc86f2";

function getWeather() {
  const location = document.getElementById("location").value;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const forecast = data.weather[0].description;
      document.getElementById("temperature").innerHTML = `Temperature: ${temperature}°C`;
      document.getElementById("forecast").innerHTML = `Forecast: ${forecast}`;
      document.getElementById("weather-container").style.display = "block";
    });
}




    
