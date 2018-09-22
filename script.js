let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function getWeather(){

    const cityName = document.querySelector("input").value;
    document.querySelector(".weather-info").style.display = "block";
    document.querySelector(".daily").style.display = "block";

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&mode=htmls&appid=1d4668da8699b92705dd5069e2a1c4a2&units=metric`,
        success: function(data){
            console.log(data);

            weatherType = data.weather[0].icon;
            if(weatherType =="01d" || weatherType == "01n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(weatherType =="02d" || weatherType == "02n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(weatherType == "03d" || weatherType == "03n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(weatherType == "04d" || weatherType == "04n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(weatherType == "09d" || weatherType == "09n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(weatherType == "10d" || weatherType == "10n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(weatherType == "11d" || weatherType == "11n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(weatherType == "13d" || weatherType == "13n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(weatherType == "50d" || weatherType == "50n"){
                document.querySelector(".iconw").innerHTML = `<i class="wi wi-fog"></i>`;
            }
            document.querySelector(".city-name").innerHTML =  `${data.name} , ${data.sys.country}`;
            document.querySelector(".temp > span").innerHTML = Math.round(data.main.temp);
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".hum > span").innerHTML = Math.round(data.main.humidity);
            document.querySelector(".pre > span").innerHTML = Math.round(data.main.pressure);
            document.querySelector(".wind > span").innerHTML = Math.round(data.wind.speed);
            
        },
        error: function(err){
            console.log(err);
        }
    })
    
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=1d4668da8699b92705dd5069e2a1c4a2&units=metric`,
        success: function(data){
            console.log(data);
            document.querySelector(".daily").style.display = "block";
            
            let d1 = new Date(data.list[0].dt*1000);
            document.querySelector(".day1 > p").innerHTML = `${days[d1.getDay()]} , ${d1.getDate()}`;       
            document.querySelector(".max").innerHTML = Math.round(data.list[0].main.temp_max);
            document.querySelector(".min").innerHTML = Math.round(data.list[0].main.temp_min);
            document.querySelector(".description1").innerHTML = (data.list[0].weather[0].description);
            forecastType1 = data.list[0].weather[0].icon;
             if(forecastType1 =="01d" || forecastType1 == "01n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType1 =="02d" || forecastType1 == "02n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".div-icon").innerHTML = `<i class="wi wi-fog"></i>`;
            } 


            let d2 = new Date(data.list[8].dt*1000);
            document.querySelector(".day2 > p").innerHTML = `${days[d2.getDay()]} , ${d2.getDate()}`;       
            document.querySelector(".max1").innerHTML = Math.round(data.list[8].main.temp_max);
            document.querySelector(".min1").innerHTML = Math.round(data.list[8].main.temp_min);
            document.querySelector(".description2").innerHTML = (data.list[8].weather[0].description);
            forecastType1 = data.list[8].weather[0].icon;
             if(forecastType1 =="01d" || forecastType1 == "01n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType1 =="02d" || forecastType1 == "02n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".div-icon2").innerHTML = `<i class="wi wi-fog"></i>`;
            }


            let d3 = new Date(data.list[16].dt*1000);
            document.querySelector(".day3 > p").innerHTML = `${days[d3.getDay()]} , ${d3.getDate()}`;       
            document.querySelector(".max2").innerHTML = Math.round(data.list[16].main.temp_max);
            document.querySelector(".min2").innerHTML = Math.round(data.list[16].main.temp_min);
            document.querySelector(".description3").innerHTML = (data.list[16].weather[0].description);
            forecastType1 = data.list[16].weather[0].icon;
             if(forecastType1 =="01d" || forecastType1 == "01n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType1 =="02d" || forecastType1 == "02n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".div-icon3").innerHTML = `<i class="wi wi-fog"></i>`;
            } 


            let d4 = new Date(data.list[24].dt*1000);
            document.querySelector(".day4 > p").innerHTML = `${days[d4.getDay()]} , ${d4.getDate()}`;       
            document.querySelector(".max3").innerHTML = Math.round(data.list[24].main.temp_max);
            document.querySelector(".min3").innerHTML = Math.round(data.list[24].main.temp_min);
            document.querySelector(".description4").innerHTML = (data.list[24].weather[0].description);
            forecastType1 = data.list[24].weather[0].icon;
             if(forecastType1 =="01d" || forecastType1 == "01n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType1 =="02d" || forecastType1 == "02n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".div-icon4").innerHTML = `<i class="wi wi-fog"></i>`;
            } 


            let d5 = new Date(data.list[32].dt*1000);
            document.querySelector(".day5 > p").innerHTML = `${days[d5.getDay()]} , ${d5.getDate()}`;       
            document.querySelector(".max4").innerHTML = Math.round(data.list[32].main.temp_max);
            document.querySelector(".min4").innerHTML = Math.round(data.list[32].main.temp_min);
            document.querySelector(".description5").innerHTML = (data.list[32].weather[0].description);
            forecastType1 = data.list[32].weather[0].icon;
             if(forecastType1 =="01d" || forecastType1 == "01n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType1 =="02d" || forecastType1 == "02n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".div-icon5").innerHTML = `<i class="wi wi-fog"></i>`;
            } 
        },
        error: function(error){
            console.log(error);
        }
    })
}