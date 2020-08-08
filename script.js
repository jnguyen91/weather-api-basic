var city = "Orlando";

//for privacy taken out access token
var access_token = ""

$.getJSON(
	"http://api.openweathermap.org/data/2.5/weather?q=" + city + access_token,
	function(data){
        console.log(data);
        /
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