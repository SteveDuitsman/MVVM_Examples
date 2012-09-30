using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DataAccess.Tests
{
    [TestClass]
    public class RealWeatherRepositoryTests
    {
        protected IWeatherRepository weatherRepo = new RealWeatherRepository(); 
        [TestMethod]
        //[Ignore]    //  This is ignored so we dont blow by our API Limit
        public void Test_WUnderground_API_Call()
        {
            var zipCode = 54601;

            var result = weatherRepo.GetWeatherData(zipCode);

            Assert.IsNotNull(result);
            Assert.IsFalse(string.IsNullOrEmpty(result));
        }
    }
}
