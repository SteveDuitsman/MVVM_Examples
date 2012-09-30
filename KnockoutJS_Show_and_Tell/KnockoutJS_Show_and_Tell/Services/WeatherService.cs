using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using DataAccess;

namespace KnockoutJS_Show_and_Tell.Services
{
    public class WeatherService : KnockoutJS_Show_and_Tell.Services.IWeatherService
    {
        private IWeatherRepository WeatherRepository;
        private ICityService CityService;

        public WeatherService(IWeatherRepository weatherRepository, ICityService cityService)
        {
            WeatherRepository = weatherRepository;
            CityService = cityService;
        }

        public string GetWeatherData() {
            var cities = CityService.GetCities();
            var zips = cities.Select(c => c.ZipCode);
            var weatherData = new List<string>();
            foreach (var z in zips)
            {
                var weather = WeatherRepository.GetWeatherData(z);
                weatherData.Add(weather);
            }
            return string.Format("[{0}]", string.Join(",", weatherData));
        }

        public string GetWeatherData(int zipCode) {
            var weatherdata = WeatherRepository.GetWeatherData(zipCode);
            return weatherdata;
        }
    }
}