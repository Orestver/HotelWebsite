const city = "lviv"; 
const apiKey = "9d7335a5332df7abfded12d161c46d44"; 

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const weatherBox = document.getElementById("weather");
      weatherBox.innerHTML = `
        <h3>${data.name}</h3>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
        <p>${Math.round(data.main.temp)}°C</p>
        <p style="text-transform: capitalize;">${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById("weather").innerHTML = "Помилка завантаження погоди.";
    }
  } catch (error) {
    document.getElementById("weather").innerHTML = "Не вдалося підключитись до сервера.";
  }
}

getWeather();
