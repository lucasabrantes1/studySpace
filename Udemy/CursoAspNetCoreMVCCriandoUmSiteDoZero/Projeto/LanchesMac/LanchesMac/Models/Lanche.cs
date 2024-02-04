using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LanchesMac.Models
{
    [Table("Lanches")]
    public class Lanche
    {
        [Key]
        public int LancheId { get; set; }



        [Required(ErrorMessage = "O Nome do lanche deve ser informado")]
        [Display(Name = "Nome do Lanche")]
        [StringLength(80, MinimumLength = 10, ErrorMessage = "O {0} deve ter no mínimo {1} e no máximo {2}")]
        public string Nome { get; set; }





        [Required(ErrorMessage = "A descrição do lanche deve ser informada")]
        [Display(Name = "Descrição do Lanche")]
        [MinLength(20, ErrorMessage = "Descrição deve ter no mínimo {1} caracteres")]
        [MaxLength(200, ErrorMessage = "Descrição pode exceder {1} caracteres")]
        public string DescricaoCurta { get; set; }















        [Required(ErrorMessage = "A descrição detalhada do lanche deve ser informada")]
        [Display(Name = "Descrição detalhada do Lanche")]
        [MinLength(20, ErrorMessage = "Descrição deve ter no mínimo {1} caracteres")]
        [MaxLength(200, ErrorMessage = "Descrição pode exceder {1} caracteres")]
        public string DescricaoDetalhada { get; set; }













        [Required(ErrorMessage = "Informe o preço do lanche")]
        [Display(Name ="Preço")]
        [Column(TypeName ="decimal(10,2)")]
        [Range(1,999.99, ErrorMessage ="O Preço deve estar entre 1 e 999,99")]
        public decimal Preco { get; set; }









        [Display(Name = "Camingo Imagem Normal")]
        [StringLength(200, ErrorMessage ="O {0} deve ter no maxímo {1} caracteres")]
        public string imageUrl { get; set; }






        [Display(Name = "Camingo Imagem Miniatura")]
        [StringLength(200, ErrorMessage = "O {0} deve ter no maxímo {1} caracteres")]
        public string ImageThumbnailUrl { get; set; }





        [Display(Name ="Preferido?")]
        public bool isLanchePreferido { get; set; }


        [Display(Name = "Estoque")]
        public bool EmEstoque { get; set; }
        public int CategoriaId { get; set;}

        public virtual Categoria Categoria { get; set; }
    }
}
