define('weatherdata',
    ['ko'],
    function (ko) {

        var weatherData = {
            Observations: new ko.observableArray([])
        };

        var fetch = function () {
            weatherData.Observations = new ko.observableArray([]);
        };

        return {
            Fetch: fetch,
            Data: ko.observable(weatherData)
        };
    }
);