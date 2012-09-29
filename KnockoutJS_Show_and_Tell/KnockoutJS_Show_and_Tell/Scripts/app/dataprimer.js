define('dataprimer',
    ['citydata', 'weatherdata'],
    function (citydata, weatherdata) {

        var fetch = function () {
            citydata.Fetch();
            weatherdata.Fetch();
        };

        return {
            Fetch: fetch
        };
    }
);