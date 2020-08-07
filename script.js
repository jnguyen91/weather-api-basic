$.getJSON(
	"http://api.openweathermap.org/data/2.5/weather?q=Vancouver&APPID=35defc8175fa6a216fb0087a787",
	function(data){
		console.log(data);
	}
);