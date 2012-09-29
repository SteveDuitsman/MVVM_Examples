using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class CityRepository : RepositoryBase<City>, ICityRepository
    {
        public CityRepository()
        {
            data = new List<City> { 
                new City { ZipCode = 78201, Name = "San Antonio, TX" },
                new City { ZipCode = 60290, Name = "Chicago, IL" },
                new City { ZipCode = 54229, Name = "Green Bay, WI" },
                new City { ZipCode = 53201, Name = "Milwaukee, WI" }
            };
        }

        public IEnumerable<City> All()
        {
            return data;
        }

        public IEnumerable<City> Where(Predicate<City> filter)
        {
            return data.Where(d => filter.Invoke(d));
        }

        public City FirstOrDefault(Predicate<City> filter)
        {
            return data.FirstOrDefault(d => filter.Invoke(d));
        }

        public void Add(City item)
        {
            data.Add(item);
        }

        public void Delete(City item) 
        {
            data.Remove(item);
        }

    }

    public class City
    {
        public int ZipCode { get; set; }
        public string Name { get; set; }
    }
}
