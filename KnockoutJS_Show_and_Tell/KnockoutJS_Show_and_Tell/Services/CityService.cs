using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DataAccess;

namespace KnockoutJS_Show_and_Tell.Services
{
    public class CityService : KnockoutJS_Show_and_Tell.Services.ICityService
    {
        protected ICityRepository CityRepository;

        public CityService(ICityRepository cityRepository)
        {
            CityRepository = cityRepository;
        }

        public IEnumerable<City> GetCities()
        {
            return CityRepository.All();
        }

        public void AddCity()
        {
            throw new NotImplementedException();
        }
    }
}