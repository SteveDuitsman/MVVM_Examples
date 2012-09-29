using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KnockoutJS_Show_and_Tell.Services;

namespace KnockoutJS_Show_and_Tell.Controllers
{
    public class WeatherController : Controller
    {
        private IWeatherService WeatherService;

        public WeatherController(IWeatherService weatherService) {
            WeatherService = weatherService;
        }

        //
        // GET: /Weather/

        public ActionResult Index()
        {
            return View();
        }

        public string GetCities()
        {
            return "";
        }

        public string GetWeather()
        {
            return WeatherService.GetWeatherData();
        }

        public string GetWeatherByZipCode(int zipCode)
        {
            return "";
        }

    }
}
