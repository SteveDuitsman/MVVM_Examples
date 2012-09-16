function WeatherSearchViewModel(config) {
    var self = this;

    self.IsLoading = ko.observable();
    self.SearchText = ko.observable();

    self.WeatherResult = ko.observable({current_observation: null});

    self.HasResults = ko.computed(function () {
        return self.WeatherResult() !== undefined;
    });

    self.AllowSearch = function () {
        return (self.SearchText() !== undefined &&
                self.SearchText().length > 0);
    };

    self.LoadWeather = function () {
        if (self.AllowSearch()) {
            self.IsLoading(true);
            self.WeatherResult({ current_observation: null });
            $.ajax({
                url: self.WUndergroundUrl(),
                dataType: "jsonp",
                success: function (data) {
                    if (data.errors == undefined /*&&
                        data.current_observation !== undefined*/) {
                        self.updateWeatherInfo(data/*.current_observation*/);
                    }
                }
            });
        }
    };

    self.updateWeatherInfo = function (data) {
        ko.mapping.fromJS(data, {}, self.WeatherResult);
        self.IsLoading(false);
    };

    var baseUrl = 'http://api.wunderground.com/api/988d4d4a2535c885/conditions/q/';

    self.WUndergroundUrl = function () {
        return baseUrl + self.SearchText() + '.json';
    };

    return {
        //  Properties
        IsLoading: self.IsLoading,
        HasResults: self.HasResults,
        SearchText: self.SearchText,
        WeatherResult: self.WeatherResult,
        //  Methods
        LoadWeather: self.LoadWeather
    };
};