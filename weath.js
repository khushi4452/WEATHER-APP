console.log(data);
document.querySelector(".city").innerHtml = data.name;
document.querySelector(".temp").innerHtml = Math.round(data.main.temp)  + "c";
document.querySelector(".humidity").innerHtml = data.main.humidity + "%";
document.querySelector(".wind").innerHtml = data.wind.speed + "km/h";


checkweather();
