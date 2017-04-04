using Energiejournaal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Energiejournaal.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetUsers()
        {
            List<User> users = new List<User>
            {
                new User { Id=1, Name="Tom", Age=23},
                new User { Id=2, Name="Jack", Age=22},
                new User { Id=3, Name="Alice", Age=24},
                new User { Id=4, Name="Mike", Age=26},
            };
            return Json(users, JsonRequestBehavior.AllowGet);
        }
        //public ActionResult BookSearch(string name)
        //{
        //    var allbooks = db.Books.Where(a => a.Author.Contains(name)).ToList();
        //    if (allbooks.Count <= 0)
        //    {
        //        return HttpNotFound();
        //    }
        //    return PartialView(allbooks);
        //}
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}