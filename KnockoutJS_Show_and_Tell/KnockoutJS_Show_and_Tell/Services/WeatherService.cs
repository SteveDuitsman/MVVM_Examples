using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DataAccess;

namespace KnockoutJS_Show_and_Tell.Services
{
    public interface IWeatherService { 
    }

    public class WeatherService : IWeatherService
    {
        public WeatherService(IWeatherRepository weatherRepository)
        { 
        }
    }
}