using LanchesMac.Models;

namespace LanchesMac.Repositories.Interfaces
{
    public interface ICategoriaRepository
    {

        //Define o contrato que deve ser implementado pela casse concreta
        IEnumerable<Categoria> Categorias { get; }
    }
}
