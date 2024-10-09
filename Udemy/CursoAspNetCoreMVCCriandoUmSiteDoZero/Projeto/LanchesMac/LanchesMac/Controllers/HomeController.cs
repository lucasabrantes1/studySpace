using LanchesMac.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LanchesMac.Controllers {
    public class HomeController : Controller {

        //iaction é um retorno generico uma interface
        public IActionResult Index() {
            return View();
        }

        public IActionResult Demo()
        {
            //TempData["Nome"] = "Lucas";
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
