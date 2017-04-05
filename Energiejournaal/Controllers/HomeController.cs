using Energiejournaal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Web.Mvc;

namespace Energiejournaal.Controllers
{
    public class HomeController : Controller
    {
        private ChartModelEntities db = new ChartModelEntities();
        int selectedIndex = 1;
        public ActionResult Index()
        {            
            SelectList Groups = new SelectList(db.vwGroups, "Id", "Name", selectedIndex);
            ViewBag.Groups = Groups;
            SelectList Chart = new SelectList(db.vwCharts.Where(c => c.ID == selectedIndex), "Id", "Name");
            ViewBag.Chart = Chart;
            return View();
        }
        public ActionResult GetItems(int id)
        {
            return PartialView(db.vwCharts.Where(c => c.ID == id).ToList());
        }
        public JsonResult GetData()
        {
            List<vwData> data = db.vwDatas.Where(p => p.Chart == selectedIndex).ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
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