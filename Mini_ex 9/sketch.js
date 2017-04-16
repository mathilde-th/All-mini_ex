var weather;

function setup() {
	createCanvas(200,200)
	loadJSON('https://crossorigin.me/api.openweathermap.org/data/2.5/weather?q=London,uk&APIID=79f54324a0a2d0d3d09e5193707d5984&units=metrics',gotData);
}


function gotData(data){
	//println(data);
	weather = data;
}

function draw() {
	background (0);
	if (weather){
		ellipse(100,100, weather.main.temp, weather.main.temp);
		ellipse(300,100, weather.main.humidity, weather.main.humidity);
	}
}

