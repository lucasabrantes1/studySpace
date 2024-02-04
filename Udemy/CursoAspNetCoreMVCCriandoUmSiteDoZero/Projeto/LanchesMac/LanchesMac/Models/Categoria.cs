namespace LanchesMac.Models
{
    public class Categoria
    {
        public int CategoriaId { get; set; }
        public string CategoriaName { get; set; }
        public string Descricao { get; set; }

       //relacionamento 1 para muitos ou seja uma categoria possui varios lanches
        public List<Lanche> Lanches { get; set;}
    }
}
