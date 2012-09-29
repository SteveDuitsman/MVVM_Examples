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

        var CityModel = function (name, zip) {
            this.Name = name || '';
            this.ZipCode = zip || 0;
            return this;
        };

        return {
            Fetch: fetch,
            Data: cityData
        };
    }
);