using LanchesMac.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace LanchesMac.Controllers
{
    public class LancheController : Controller
    {

        /*Para acessar o banco de dados e listar, vamos acessar o repository, fazemos
         * isso atraves do contairner a de dependencia do meu arquivo startup linha 23
         */
        private readonly ILancheRepository _lancheRepository;

        /*Instância do meu repositoryi construtor*/
        public LancheController(ILancheRepository lancheRepository)
        {
            _lancheRepository = lancheRepository;
        }


        //Retorna a lista de lanches
        public IActionResult List()
        {
            //ViewData["Titulo"] = "Todos os Lanches";
            //ViewData["Data"] = DateTime.Now;

            //var lanches = _lancheRepository.Lanches;
            //var totalLanches = lanches.Count();

            //ViewBag.Total = "Total de lanches: ";
            //ViewBag.TotalLanches = totalLanches;

            var lanches = _lancheRepository.Lanches;
            return View(lanches);
        }
    }
}
