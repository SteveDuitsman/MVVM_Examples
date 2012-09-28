using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KnockoutJS_Show_and_Tell.Services;

namespace KnockoutJS_Show_and_Tell.Controllers
{
    public class WeatherSPAController : Controller
    {
        public WeatherSPAController(IWeatherService weatherService) { }

        //
        // GET: /Weather/

        public ActionResult Index()
        {
            return View();
        }

        //public JsonResult GetCities()
        //{ 
        //    return new JsonResult { Data = cityData, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        //}


        //public string GetWeatherByZipCode(int zipCode)
        //{ }

    }
}
