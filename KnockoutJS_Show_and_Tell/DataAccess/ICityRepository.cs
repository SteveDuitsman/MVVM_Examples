using System;
using System.Collections.Generic;
namespace DataAccess
{
    public interface ICityRepository
    {
        void Add(City item);
        IEnumerable<City> All();
        void Delete(City item);
        City FirstOrDefault(Predicate<City> filter);
        IEnumerable<City> Where(Predicate<City> filter);
    }
}
