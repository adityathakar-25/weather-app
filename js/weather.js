//I have added comments to know functionalities of required code snippet

function getValues() { 
    let textbox = document.getElementById("searchbutton"); 
    let value = textbox.value;
   
    const cities = ["Ahmedabad", "Surat", "Mumbai", "Kolkata", "Delhi"];
    const lowerCaseCities = cities.map(city => city.toLowerCase());
  
    if (lowerCaseCities.includes(value.toLowerCase())){
      // Navigates to the details page with the selected city
      window.open("weather-details.html?city=" + value.toLowerCase(),"_blank")
    } else {
      alert("City is not Currently Available")
    }
}
  
function getValue() {  
    alert("Feedback Submitted Successfully");
}

const weatherData = {
    "ahmedabad": {
      name: "Ahmedabad, India",
      displayName: "Ahmedabad",
      temp: 31, condition: "Haze", feelsLike: 29, aqi: 219, wind: 17,
      humidity: 65, visibility: 5, pressure: 1008, dewPoint: 24,
      sunrise: "6:21 am", sunset: "6:55 pm",
      forecast: [29, 27, 30, 31, 30, 32, 34],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29919412866!2d72.41492667936487!3d23.02015808097015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713013110036!5m2!1sen!2sin",
      monthly: { sunny: 22, cloudy: 8, rainy: 0 }
    },
    "surat": {
      name: "Surat, India",
      displayName: "Surat",
      temp: 28, condition: "Sunny", feelsLike: 30, aqi: 108, wind: 18,
      humidity: 45, visibility: 4, pressure: 1009, dewPoint: 21,
      sunrise: "6:53 am", sunset: "6:00 pm",
      forecast: [27, 33, 35, 32, 34, 34, 32],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1880144468!2d72.65748003681377!3d21.159120351718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713088675110!5m2!1sen!2sin",
      monthly: { sunny: 21, cloudy: 9, rainy: 0 }
    },
    "mumbai": {
      name: "Mumbai, India",
      displayName: "Mumbai",
      temp: 32, condition: "Haze", feelsLike: 29, aqi: 100, wind: 6,
      humidity: 19, visibility: 3.5, pressure: 1014, dewPoint: 5,
      sunrise: "6:55 am", sunset: "5:42 pm",
      forecast: [28, 28, 28, 28, 28, 28, 28],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335962.71364867495!2d72.68507391588562!3d19.07367395516589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713088830579!5m2!1sen!2sin",
      monthly: { sunny: 20, cloudy: 10, rainy: 0 }
    },
    "kolkata": {
      name: "Kolkata, India",
      displayName: "Kolkata",
      temp: 30, condition: "Haze", feelsLike: 29, aqi: 274, wind: 3,
      humidity: 49, visibility: 4.5, pressure: 1008, dewPoint: 23,
      sunrise: "5:17 am", sunset: "5:56 pm",
      forecast: [30, 29, 28, 32, 32, 33, 30],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231314965!2d88.26495003632974!3d22.53540637404207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1713088736755!5m2!1sen!2sin",
      monthly: { sunny: 19, cloudy: 11, rainy: 0 }
    },
    "delhi": {
      name: "Delhi, India",
      displayName: "Delhi",
      temp: 34, condition: "Haze", feelsLike: 34, aqi: 430, wind: 8,
      humidity: 27, visibility: 3.5, pressure: 1011, dewPoint: 11,
      sunrise: "7:02 am", sunset: "5:52 pm",
      forecast: [32, 34, 35, 33, 33, 30, 31],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5264687316!2d76.76356119840696!3d28.64368459447141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1713088778914!5m2!1sen!2sin",
      monthly: { sunny: 25, cloudy: 5, rainy: 0 }
    }
};

// This function runs automatically when the page loads
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    const currentCity = weatherData[city] || weatherData["surat"];
    const currentCityId = city || "surat";

    const popularCities = [
        { id: 'delhi', name: 'Delhi', temp: '34°C' },
        { id: 'surat', name: 'Surat', temp: '28°C' },
        { id: 'ahmedabad', name: 'Ahmedabad', temp: '31°C' },
        { id: 'kolkata', name: 'Kolkata', temp: '30°C' },
        { id: 'mumbai', name: 'Mumbai', temp: '32°C' }
    ];

    const popularListContainer = document.getElementById('popular-cities-list');
    let popularCitiesHTML = ''; 

    popularCities.forEach(popularCity => {
        if (popularCity.id !== currentCityId) {
            const buttonHTML = `
                <button class="popular-cities__button interactive-border">
                    <img src="Images/plistlogo.png" height="35px">     ${popularCity.name}     ${popularCity.temp}
                </button>
            `;
            popularCitiesHTML += `<a href="weather-details.html?city=${popularCity.id}">${buttonHTML}</a>`;
        }
    });

    popularListContainer.innerHTML = popularCitiesHTML;

    // Update all elements with the data for the selected city
    document.getElementById('nav-city-temp').innerText = `${currentCity.temp}° ${currentCity.name}`;
    document.getElementById('main-temp').innerText = `${currentCity.temp}°`;
    document.getElementById('condition').innerText = currentCity.condition;
    document.getElementById('feels-like').innerText = `Feels like ${currentCity.feelsLike}°C`;
    
    // Update metrics
    document.getElementById('aqi').innerText = currentCity.aqi;
    document.getElementById('wind').innerText = `${currentCity.wind}km/h`;
    document.getElementById('humidity').innerText = `${currentCity.humidity}%`;
    document.getElementById('visibility').innerText = `${currentCity.visibility} km`;
    document.getElementById('pressure').innerText = `${currentCity.pressure} mb`;
    document.getElementById('dew-point').innerText = `${currentCity.dewPoint}°`;
    document.getElementById('sunrise').innerText = currentCity.sunrise;
    document.getElementById('sunset').innerText = currentCity.sunset;

    // Update forecast
    for (let i = 0; i < 7; i++) {
        document.getElementById(`forecast-day-${i + 1}`).innerText = `${currentCity.forecast[i]}°`;
    }

    // Update Map
    document.getElementById('city-map').src = currentCity.mapUrl;
    
    // Update Monthly Planner
    const monthlyPlanner = document.getElementById('monthly-planner');
    monthlyPlanner.innerHTML = `
        Sunny Day : ${currentCity.monthly.sunny}<br>
        Cloudy Days : ${currentCity.monthly.cloudy}<br>
        Rainy Days : ${currentCity.monthly.rainy}<br><br>
        Average High : 36°<br>
        Average Low : 31°<br>
    `;
};