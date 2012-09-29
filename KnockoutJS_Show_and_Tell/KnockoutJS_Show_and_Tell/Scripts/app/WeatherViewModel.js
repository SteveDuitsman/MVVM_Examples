function WeatherViewModel(config) {
    var self = this;

    self.Config = config;

    self.Cities = ko.observableArray([]);
    self.SelectedCity = ko.observable();
    self.FilteredWeather = ko.observableArray([]);
    self.Weather = ko.observableArray([]);

    self.FetchCities = function (callback) {
        return $.getJSON(self.Config.Urls.GetCities, function (data) {
            ko.mapping.fromJS(data, {}, self.Cities);
            self.SelectedCity(78201);
            if (callback !== undefined && typeof (callback) == "function") {
                callback();
            }
        });
    };

    self.FetchWeather = function (callback) {
        return $.getJSON(self.Config.Urls.GetWeather, function (data) {
            ko.mapping.fromJS(data, {}, self.Weather);
            if (callback !== undefined && typeof (callback) == "function") {
                callback();
            }
        });
    };

    self.IsCitySelected = function(zip) {
        return self.SelectedCity() === zip;
    };

    self.SelectCity = function (zip) {
        if (zip === null || zip == undefined) {
            var filteredData = ko.utils.arrayFilter(self.Cities, function (item) {
                var match = false;
                var locationData = item.display_location() || undefined;
                if (locationData !== undefined) {
                    var zipData = locationData.zip() || undefined;
                    if (zipData !== undefined) {
                        match = ko.utils.stringStartsWith(zipData, zip);
                    }
                }
                return match;
            });
            self.SelectedCity(zip);
            self.FilteredWeather(filteredData);
        } 
    };
    //return {
    //    //Fetch: self.Fetch,
    //    FetchCities: self.FetchCities,
    //    Cities: ko.observable(self.Cities),
    //    FetchWeather: self.FetchWeather,
    //    Weather: ko.observable(self.Weather)
    //};
};