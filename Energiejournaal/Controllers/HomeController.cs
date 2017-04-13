﻿using Energiejournaal.Models;
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
            ViewBag.Groups = db.vwGroups.ToList();
            ViewBag.Charts = db.vwCharts.Where(c => c.ID == selectedIndex).ToList();
            return View();
        }
        public JsonResult GetCharts(int id)
        {
            var Chart = db.vwCharts.Where(p => p.ID == id).ToList();
            return Json(Chart, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetData(int id, DateTime mindate, DateTime maxdate)
        {
            var chartdata = db.vwDatas.Where(p => p.Chart == id).Where(s => s.Date >= mindate).Where(s => s.Date <= maxdate).ToList();
            return Json(chartdata, JsonRequestBehavior.AllowGet);
        }
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