using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class RealWeatherRepository : IWeatherRepository
    {
        internal string WeatherUndergroundAPI = @"http://api.wunderground.com/api/988d4d4a2535c885/conditions/q/";
        public string GetWeatherData()
        {
            throw new NotImplementedException();
        }

        public string GetWeatherData(int zipCode)
        {
            var result = string.Empty;
            var url = WeatherUndergroundAPI + string.Format("{0}.json", zipCode);
            HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
            httpWebRequest.Method = WebRequestMethods.Http.Get;
            httpWebRequest.Accept = "application/json";

            var response = (HttpWebResponse)httpWebRequest.GetResponse();

            using (var sr = new StreamReader(response.GetResponseStream()))
            {
                result = sr.ReadToEnd();
            }
            return result;
        }
    }
}
