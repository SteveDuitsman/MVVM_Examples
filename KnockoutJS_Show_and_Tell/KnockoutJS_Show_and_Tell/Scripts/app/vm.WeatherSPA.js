define('vm.WeatherSPA',
	['ko', 'weatherdata', 'citydata'],
	function (ko, weatherdata, citydata) {

		return {
			Cities: citydata.Cities,
			Weather: weatherdata.Weather
		};
	});