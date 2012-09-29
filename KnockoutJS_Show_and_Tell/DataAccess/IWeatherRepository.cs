using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public interface IWeatherRepository
    {
        string GetWeatherData();
        string GetWeatherData(int zipCode);
    }
}
