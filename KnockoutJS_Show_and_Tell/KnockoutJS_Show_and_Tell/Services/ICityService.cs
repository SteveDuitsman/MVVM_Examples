using System;
using System.Collections.Generic;
using DataAccess;
namespace KnockoutJS_Show_and_Tell.Services
{
    public interface ICityService
    {
        void AddCity();
        IEnumerable<City> GetCities();
    }
}
