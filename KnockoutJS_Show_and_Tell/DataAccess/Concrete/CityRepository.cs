using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class CityRepository : RepositoryBase<City>
    {
        public CityRepository()
        {
            data = new List<City> { 
                new City { ZipCode = 78201, Name = "San Antonio, TX" },
                //new City { ZipCode = 60290, Name = "Chicago, IL" },
                //new City { ZipCode = 54229, Name = "Green Bay, WI" },
                new City { ZipCode = 53201, Name = "Milwaukee, WI" }
            };
        }
    }

    public class City
    {
        public int ZipCode { get; set; }
        public string Name { get; set; }
    }
}
