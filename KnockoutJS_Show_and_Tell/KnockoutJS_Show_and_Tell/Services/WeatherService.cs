using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataAccess;

namespace KnockoutJS_Show_and_Tell.Services
{
    public interface IWeatherService 
    {
        string GetWeatherData();
    }

    public class WeatherService : IWeatherService
    {

        private IWeatherRepository WeatherRepository;

        public WeatherService(IWeatherRepository weatherRepository)
        {
            WeatherRepository = weatherRepository;
        }

        public string GetWeatherData() {
            var weatherdata = WeatherRepository.GetWeatherData();
            return weatherdata;
        }
    }
}