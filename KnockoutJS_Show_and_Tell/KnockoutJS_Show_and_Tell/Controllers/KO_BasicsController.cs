using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockoutJS_Show_and_Tell.Controllers
{
    public class KO_BasicsController : Controller
    {
        //
        // GET: /KO_Basic/

        public ActionResult Index()
        {
            return View("KO_Basics");
        }

    }
}
