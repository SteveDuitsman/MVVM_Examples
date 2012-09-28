define('citydata',
    ['ko'],
    function (ko) {

        var cityData = {
            Cities: new ko.observableArray([])
        };

        var fetch = function () {
            cityData.Cities = new ko.observableArray([]);
        };

        return {
            Fetch: fetch,
            Data: ko.observable(cityData)
        };
    }
);