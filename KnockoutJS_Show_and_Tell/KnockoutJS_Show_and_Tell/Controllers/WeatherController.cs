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
        private ICityService CityService;

        public WeatherController(IWeatherService weatherService, ICityService cityService) {
            WeatherService = weatherService;
            CityService = cityService;
        }

        //
        // GET: /Weather/

        public ActionResult Index()
        {
            return View();
        }

        [OutputCache(Duration=600, VaryByParam="*")]
        public JsonResult GetCities()
        {
            var cities = CityService.GetCities();
            return new JsonResult { Data = cities, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        [OutputCache(Duration = 600, VaryByParam = "*")]
        public string GetWeather()
        {
            return WeatherService.GetWeatherData();
        }

        [OutputCache(Duration = 600, VaryByParam = "*")]
        public string GetWeatherByZipCode(int zipCode)
        {
            return WeatherService.GetWeatherData(zipCode);
        }

    }
}
