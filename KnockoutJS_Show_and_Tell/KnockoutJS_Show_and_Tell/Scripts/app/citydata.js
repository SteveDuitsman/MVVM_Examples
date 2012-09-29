define('citydata',
    ['ko'],
    function (ko) {

        var cityData = {
            Cities: new ko.observableArray([])
        };

        var fetch = function () {
            cityData.Cities = new ko.observableArray([
                new CityModel('New Berlin', 53151),
                new CityModel('Winnebago', 61088)
            ]);
        };

        return {
            Fetch: fetch,
            Data: cityData
        };
    }
);