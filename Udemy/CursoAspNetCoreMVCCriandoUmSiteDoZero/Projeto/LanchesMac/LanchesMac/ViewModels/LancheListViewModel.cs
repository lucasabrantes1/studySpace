using LanchesMac.Models;

namespace LanchesMac.ViewModels
{
    public class LancheListViewModel
    {
        public IEnumerable<Lanche> Lanches { get; set; }
        //Define a outra propriedade com categoria que eu quero exibir
        public string CategoriaAtual { get; set; }
    }
}
