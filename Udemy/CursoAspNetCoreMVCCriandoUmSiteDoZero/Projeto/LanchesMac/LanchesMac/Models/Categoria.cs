using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LanchesMac.Models
{
    [Table("Categorias")]
    public class Categoria
    {
        [Key]
        public int CategoriaId { get; set; }



        [StringLength(100, ErrorMessage = "O Tamanho Máximo é 100 caracteres")]
        [Required(ErrorMessage ="Informe o nome da categoria")]
        [Display(Name ="Nome")]
        public string CategoriaName { get; set; }





        [StringLength(200, ErrorMessage = "O Tamanho Máximo é 200 caracteres")]
        [Required(ErrorMessage = "Informe a descrição da categoria")]
        [Display(Name = "Nome")]
        public string Descricao { get; set; }





       //relacionamento 1 para muitos ou seja uma categoria possui varios lanches
        public List<Lanche> Lanches { get; set;}
    }
}
