function WeatherViewModel(config) {
    var self = this;

    self.Config = config;

    self.Cities = ko.observableArray([]);
    self.SelectedCity = ko.observable();
    self.FilteredWeather = ko.observableArray([]);
    self.Weather = ko.observableArray([]);

    self.FetchCities = function (callback) {
        return $.get(self.Config.Urls.GetCities, function (data) {
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

    self.FetchWeatherByZipCode = function (zipCode, callback) {
        self.FilteredWeather.removeAll();
        return $.get(self.Config.Urls.GetWeatherByZipCode, { zipCode: zipCode }, function (data) {
            var tempObsArray = ko.observableArray([]);
            ko.mapping.fromJS(data, {}, tempObsArray);
            self.Weather.push(tempObsArray);
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
            if (filteredData.length > 0) {
                ko.mapping.fromJS(filteredData, {}, self.FilteredWeather);
            } else {
                self.FetchWeatherByZipCode(self.SelectedCity(), function () { self.LoadWeather(cityModel) });
            }
        } 
    };

    self.ShowAddForm = ko.observable(false);
    self.NewCityModel = new CityModel();
    self.ShowAddCityError = ko.observable(false);
    self.AddCityError = ko.observable();

    self.ShowAddCityForm = function () {
        self.NewCityModel = new CityModel();
        self.ShowAddForm(true);
    };
 
    self.SaveNewCity = function () {
        self.AddCityError("");
        self.ShowAddCityError(false);
        var jsonCity = ko.toJSON(self.NewCityModel);

        $.ajax({
            type: 'POST',
            url: self.Config.Urls.AddCity,
            data: jsonCity,
            contentType: 'application/json',
            success: function (returnedData) {
                if (returnedData != null && returnedData.length() > 0) {
                    self.AddCityError(returnedData);
                    self.ShowAddCityError(true);
                } else {
                    self.NewCityModel = new CityModel();
                    self.ShowAddForm(false);
                    self.FetchCities();
                }
            }
        });
    };

    self.CancelAddNewCity = function () {
        self.AddCityError("");
        self.ShowAddCityError(false);
        self.NewCityModel = new CityModel();
    };

};