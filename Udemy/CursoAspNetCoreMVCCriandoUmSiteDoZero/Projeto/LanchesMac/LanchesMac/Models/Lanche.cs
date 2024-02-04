namespace LanchesMac.Models
{
    public class Lanche
    {
        public int LancheId { get; set; }
        public string Nome { get; set; }
        public string DescricaoCurta { get; set; }
        public string DescricaoDetalhada { get; set; }
        public decimal Preco { get; set; }
        public string imageUrl { get; set; }
        public string ImageThumbnailUrl { get; set; }
        public bool isLanchePreferido { get; set; }
        public bool EmEstoque { get; set; }
        public int CategoriaId { get; set;}

        public virtual Categoria Categoria { get; set; }
    }
}
