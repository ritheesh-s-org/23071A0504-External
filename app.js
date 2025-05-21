
const API_KEY = '448e79816af1c34ad8dc8fe4005d7de4';
const fetchButton = document.getElementById('fetch-weather');
const cityInput = document.getElementById('city-input');
const weatherChartCanvas = document.getElementById('weather-chart');
// Arrow function to fetch weather data using async/await
const getWeatherData = async (city) => {
try {
const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
if (!response.ok) throw new Error('City not found!');
const data = await response.json();
return data;
} catch (error) {
alert(error.message);
}
};

// Callback to process and display weather data
const displayWeather = (data) => {
const labels = data.list.map(item => new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
const temperatures = data.list.map(item => item.main.temp);

renderChart(labels, temperatures);
};


fetchButton.addEventListener('click', () => {
const city = cityInput.value.trim();
if (city) {
getWeatherData(city)
.then(data => {
if (data) displayWeather(data);
});
} else {
alert('Please enter a city name!');
}
});

// Function to render the graph using Chart.js
const renderChart = (labels, temperatures) => {
    new Chart(weatherChartCanvas, {
        type: 'line',
    data: {
        labels,
        datasets: [{
        label: 'Temperature (\u00B0C)',
        data: temperatures,
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        tension: 0.4
    }]
},
options: {
    scales: {
    y: { beginAtZero: false }
}
}
});
};


