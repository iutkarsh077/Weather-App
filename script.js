let a = document.getElementById("first");
let city = document.getElementById("city");
let submit = document.getElementById("submit");
let cityname1 = document.getElementById("cityname");




async function func1(city) {
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a4ca16296msh908e0e9cba83101p1c9d02jsn963e55160e05",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
    cityname1.innerHTML = city;
    try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    tempur.innerHTML = `${result.temp}°C`;
    temp.innerHTML = `${result.temp}°C`;
    min_temp.innerHTML = `${result.min_temp}°C`;
    max_temp.innerHTML = `${result.max_temp}°C`;
    wind.innerHTML = `${result.wind_degrees}`;
    feels.innerHTML = `${result.feels_like}`;
    humidity.innerHTML = `${result.humidity}`;
    hum.innerHTML = `${result.humidity}`;
    windspeed.innerHTML = `${result.wind_speed} km/h`;
    speedwind.innerHTML = `${result.wind_speed}`;
    sunrise.innerHTML = `${result.sunrise}`;
    const timestamp = sunrise.innerHTML;
    const milliseconds = timestamp * 1000; // Convert seconds to milliseconds
    const date = new Date(milliseconds);
// Get the hours component from the date
    const hours = date.getHours();
        sunrise.innerHTML = `${hours}:00am`;
    // console.log(hours);


    sunset.innerHTML = `${result.sunset}`;
    const timestamp2 = sunset.innerHTML;
    const milliseconds2 = timestamp2 * 1000; // Convert seconds to milliseconds
    const date2 = new Date(milliseconds2);
// Get the hours component from the date
    const hours2 = date.getHours();
        sunset.innerHTML = `${hours2 + 2}:00pm`;
    // console.log(hours2);


  } catch (error) {
    console.error(error);
  }
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    func1(city.value);
})


func1("Bengaluru");



const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a4ca16296msh908e0e9cba83101p1c9d02jsn963e55160e05",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function func2() {
    try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct1.innerHTML = `${result.cloud_pct}`;
    Feels_Like1.innerHTML = `${result.feels_like}`;
    Humidity1.innerHTML = `${result.humidity}`;
    Max_Temp1.innerHTML = `${result.max_temp}`;
    Min_Temp1.innerHTML = `${result.min_temp}`;

    Sunrise1.innerHTML = `${result.sunrise}`;
    const timestamp1 = Sunrise1.innerHTML;
    const milliseconds1 = timestamp1 * 1000;
    const date = new Date(milliseconds1);
    const hours1 = date.getHours();
    Sunrise1.innerHTML = `${hours1}:00 am`;

    Sunset1.innerHTML = `${result.sunset}`;
    const timestamp2 = Sunset1.innerHTML;
    const milliseconds2 = timestamp2 * 1000;
    const date2 = new Date(milliseconds2);
    const hours2 = date2.getHours();
    Sunset1.innerHTML = `${hours2}:00 pm`;

    Temp1.innerHTML = `${result.temp}`;
    Wind_degrees1.innerHTML = `${result.wind_degrees}`;
    Wind_speed1.innerHTML = `${result.wind_speed}`;
  } catch (error) {
    console.error(error);
  }
}
func2();





async function func3() {
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a4ca16296msh908e0e9cba83101p1c9d02jsn963e55160e05",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
    try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct2.innerHTML = `${result.cloud_pct}`;
    Feels_Like2.innerHTML = `${result.feels_like}`;
    Humidity2.innerHTML = `${result.humidity}`;
    Max_Temp2.innerHTML = `${result.max_temp}`;
    Min_Temp2.innerHTML = `${result.min_temp}`;

    Sunrise2.innerHTML = `${result.sunrise}`;
    const timestamp1 = Sunrise2.innerHTML;
    const milliseconds1 = timestamp1 * 1000;
    const date = new Date(milliseconds1);
    const hours1 = date.getHours();
    Sunrise2.innerHTML = `${hours1}:00 am`;

    Sunset2.innerHTML = `${result.sunset}`;
    const timestamp2 = Sunset2.innerHTML;
    const milliseconds2 = timestamp2 * 1000;
    const date2 = new Date(milliseconds2);
    const hours2 = date2.getHours();
    Sunset2.innerHTML = `${hours2}:00 pm`;

    Temp2.innerHTML = `${result.temp}`;
    Wind_degrees2.innerHTML = `${result.wind_degrees}`;
    Wind_speed2.innerHTML = `${result.wind_speed}`;
  } catch (error) {
    console.error(error);
  }
}
func3();




async function func4() {
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a4ca16296msh908e0e9cba83101p1c9d02jsn963e55160e05",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
    try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct3.innerHTML = `${result.cloud_pct}`;
    Feels_Like3.innerHTML = `${result.feels_like}`;
    Humidity3.innerHTML = `${result.humidity}`;
    Max_Temp3.innerHTML = `${result.max_temp}`;
    Min_Temp3.innerHTML = `${result.min_temp}`;

    Sunrise3.innerHTML = `${result.sunrise}`;
    const timestamp1 = Sunrise3.innerHTML;
    const milliseconds1 = timestamp1 * 1000;
    const date = new Date(milliseconds1);
    const hours1 = date.getHours();
    Sunrise3.innerHTML = `${hours1}:00 am`;

    Sunset3.innerHTML = `${result.sunset}`;
    const timestamp2 = Sunset3.innerHTML;
    const milliseconds2 = timestamp2 * 1000;
    const date2 = new Date(milliseconds2);
    const hours2 = date2.getHours();
    Sunset3.innerHTML = `${hours2 + 1}:30 pm`;

    Temp3.innerHTML = `${result.temp}`;
    Wind_degrees3.innerHTML = `${result.wind_degrees}`;
    Wind_speed3.innerHTML = `${result.wind_speed}`;
  } catch (error) {
    console.error(error);
  }
}
func4();
