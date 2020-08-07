var city = "Orlando";

$.getJSON(
	"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=35defc8175fa6a216fb0087a7875e9a4",
	function(data){
        console.log(data);
        
        var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;
        var name = data.main.name;
        var country = data.sys.country;

        
        $(".country").append(country);
        $(".name").append(city);
        
        $(".icon").attr("src", icon);
        $(".temp").append(temp); 
        $(".weather").append(weather);
        
	}
);