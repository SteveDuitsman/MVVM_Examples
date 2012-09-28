define('binder',
    ['jquery', 'ko', 'citydata', 'weatherdata'],
    function ($, ko, citydata, weatherdata) {
        var bind = function () {
            ko.applyBindings(citydata.Data, getElement('cityList'));
            ko.applyBindings(weatherdata.Data, getElement('weatherObservations'));
        };

        var getElement = function (id) {
            return document.getElementById(id);
        };
        return { Bind: bind };
    });