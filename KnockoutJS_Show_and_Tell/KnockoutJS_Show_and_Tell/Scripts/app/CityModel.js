function CityModel(name, zip) {
    this.Name = ko.observable(name || '');
    this.ZipCode = ko.observable(zip || 0);

    return this;
};