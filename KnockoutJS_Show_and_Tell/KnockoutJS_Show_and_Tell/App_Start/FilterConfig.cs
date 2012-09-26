using System.Web;
using System.Web.Mvc;

namespace KnockoutJS_Show_and_Tell
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}