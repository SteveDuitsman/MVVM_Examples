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

    self.LoadWeather = function (cityModel) {
        if (cityModel !== null || cityModel != undefined) {
            var zipCodeToMatch = cityModel.ZipCode();
            var filteredData = ko.utils.arrayFilter(self.Weather(), function (item) {
                var match = false;
                var current_observation = item.current_observation || undefined;
                if (current_observation !== undefined) {
                    var locationData = current_observation.display_location || undefined;
                    if (locationData !== undefined) {
                        var zipData = locationData.zip || undefined;
                        if (zipData !== undefined) {
                            var zipCode = zipData();
                            match = ko.utils.stringStartsWith(zipCode, zipCodeToMatch.toString());
                        }
                    }
                }
                return match;
            });
            self.SelectedCity(cityModel.ZipCode());
            ko.mapping.fromJS(filteredData, {}, self.FilteredWeather);
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