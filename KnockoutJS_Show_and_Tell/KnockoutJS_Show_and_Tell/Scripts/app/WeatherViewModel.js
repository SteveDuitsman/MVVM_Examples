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
        return $.getJSON(self.Config.Urls.GetWeatherByZipCode, { zipCode: zipCode }, function (data) {
            var tempObs = {};
            ko.mapping.fromJS(data, {}, tempObs);
            self.Weather.push(tempObs);
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
            var zipCodeToMatch = cityModel.ZipCode().toString();
            var filteredData = ko.utils.arrayFilter(self.Weather(), function (item) {
                var match = false;
                var current_observation = item.current_observation || undefined;
                if (current_observation !== undefined) {
                    var locationData = current_observation.display_location || undefined;
                    if (locationData !== undefined) {
                        var zipData = locationData.zip || undefined;
                        if (zipData !== undefined) {
                            var zipCode = zipData();
                            match = ko.utils.stringStartsWith(zipCode, zipCodeToMatch);
                        }
                    }
                }
                return match;
            });
            if (filteredData.length > 0) {
                ko.mapping.fromJS(filteredData, {}, self.FilteredWeather);
            } else {
                if (self.SelectedCity() !== cityModel.ZipCode()) {
                    self.FetchWeatherByZipCode(cityModel.ZipCode(), function () { self.LoadWeather(cityModel) });
                }
            }
            self.SelectedCity(cityModel.ZipCode());
        } 
    };

    var matchWeatherItemByZipCode = function (zipCode) {
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
        self.ShowAddForm(false);
    };

};