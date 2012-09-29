function WeatherViewModel(config) {
    var self = this;
    self.Config = config;
    self.Cities = ko.observableArray([]);
    self.Weather = ko.observableArray([]);

    self.FetchCities = function (callback) {
        return $.getJSON(self.Config.Urls.GetCities, function (data) {
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

    self.FilterWeather = function (zip) {
        if (zip === null || zip == undefined) {
        } else {
        }
    };

    //self.Fetch = function () {
    //    var deferred = $.Deferred();

    //    $.when(self.FetchCities(), self.FetchWeather())
    //     .done(deferred.resolve);

    //    //var cityDeferred = $.Deferred();
    //    //self.FetchCities(cityDeferred.resolve);
    //    //var weatherDeferred = $.Deferred();
    //    //self.FetchWeather(weatherDeferred.resolve);
    //    //if (cityDeferred.isResolved() && weatherDeferred.isResolved()) {
    //    //    deferred.resolve();
    //    //}
    //    return deferred.promise();
    //};

    return {
        //Fetch: self.Fetch,
        FetchCities: self.FetchCities,
        Cities: ko.observable(self.Cities),
        FetchWeather: self.FetchWeather,
        Weather: ko.observable(self.Weather)
    };
};