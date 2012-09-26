﻿using System;
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

    public class RealWeatherRepository : IWeatherRepository
    {
        public string GetWeatherData()
        {
            throw new NotImplementedException();
        }

        public string GetWeatherData(int zipCode)
        {
            throw new NotImplementedException();
        }
    }

    public class MockWeatherRepository : IWeatherRepository
    {
        public string GetWeatherData()
        {
            throw new NotImplementedException();
        }

        public string GetWeatherData(int zipCode)
        {
            throw new NotImplementedException();
        }
    }
}
