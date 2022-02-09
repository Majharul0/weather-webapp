let weather = {
    apiKey: "6bcaccd27f11acb2a37c03a1f1b6aea1",
    fatchwather: (city = "bangladesh") =>{
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid=" + weather.apiKey 
            
        ).then((response) => response.json()).then((data) =>{
            weather.displaystatus(data);
        })
    },
    displaystatus: (data) =>{
        // get status form api
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;
        
        // get and set status
        document.querySelector(".cityName").textContent = name;
        document.querySelector(".weatherStatus").textContent = description;
        document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png" ;
        document.querySelector(".temp").innerHTML = temp + "<span>°C</span>";
        document.querySelector(".hdt").innerHTML = humidity + "<span >%</span>";
        document.querySelector(".ws").innerHTML = speed + "<span>km/h</span>";

    },
    searchresult: () =>{
        weather.fatchwather(document.querySelector(".search-value").value);

    }
    
}
weather.fatchwather()

const searchBtn = document.querySelector("#srh-btn");
searchBtn.addEventListener('click', () => weather.searchresult());

const searchBar = document.querySelector(".search-value");
searchBar.addEventListener('keyup', (e) => {
    if(e.key == "Enter"){
     weather.searchresult()
    }else if(e.key == "Space"){
     weather.searchresult()

    }

})
