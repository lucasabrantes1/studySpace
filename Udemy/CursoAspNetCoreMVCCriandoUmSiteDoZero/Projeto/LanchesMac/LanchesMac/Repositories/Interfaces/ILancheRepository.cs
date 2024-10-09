using LanchesMac.Models;

namespace LanchesMac.Repositories.Interfaces
{
    public interface ILancheRepository
    {
        //Retorna todos os lanches e preferidos
        IEnumerable<Lanche> Lanches { get; }
        IEnumerable<Lanche> LanchesPreferidos { get; }
        //Filtro
        Lanche GetLancheById(int lancheId);
    }
}
