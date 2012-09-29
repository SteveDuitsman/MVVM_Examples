using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Resources;

namespace DataAccess.Concrete
{
    public class MockWeatherRepository : RepositoryBase<string>, IWeatherRepository
    {
        public MockWeatherRepository(): base()
        {
            data.Add(MockWeatherData.Z53201);
            data.Add(MockWeatherData.Z60290);
            data.Add(MockWeatherData.Z54229);
            data.Add(MockWeatherData.Z78201);
        }
        
        public string GetWeatherData()
        {
            var mockArray = new StringBuilder();
            mockArray.AppendFormat("[{0}]", string.Join(",", data));
            return mockArray.ToString();
        }

        public string GetWeatherData(int zipCode)
        {
            throw new NotImplementedException();
        }
    }
}
