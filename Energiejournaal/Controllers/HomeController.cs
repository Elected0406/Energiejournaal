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
            SelectList Groups = new SelectList(db.vwGroups, "Id", "Name", selectedIndex);
            ViewBag.Groups = Groups;
            SelectList Chart = new SelectList(db.vwCharts.Where(c => c.ID == selectedIndex), "Id", "Name");
            ViewBag.Chart = Chart;
            return View();
        }
        public JsonResult GetCharts(int id)
        {
            SelectList Chart = new SelectList(db.vwCharts.Where(c => c.ID == id), "Id", "Name");
            return Json(Chart, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetData(int id)
        {
             List <vwData> chartdata = db.vwDatas.Where(p => p.Chart == id).ToList();
            return Json(chartdata, JsonRequestBehavior.AllowGet);
        }
        //public JsonResult Getcharts()
        //{
        //    SelectList Chart = new SelectList(db.vwCharts.Where(c => c.Group == selectedGroup), "Id", "Name");
        //    return Json(Chart, JsonRequestBehavior.AllowGet);
        //}
        //public JsonResult GetData()
        //{
        //    List<vwData> data = db.vwDatas.Where(p => p.Chart == selectedIndex).ToList();
        //    return Json(data, JsonRequestBehavior.AllowGet);
        //}
        public JsonResult GetUsers()
        {
            List<User> users = new List<User>
        {
            new User {Id=1, Name="Tom", Age=23},
            new User {Id=2, Name="Alice", Age=28},
            new User {Id=3, Name="Bill", Age=32}
        };
            return Json(users, JsonRequestBehavior.AllowGet);
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