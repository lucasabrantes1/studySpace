using LanchesMac.Context;
using LanchesMac.Models;
using LanchesMac.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LanchesMac.Repositories
{
    public class LancheRepository : ILancheRepository
    {   
        //Injeta a instância do contexto
        private readonly AppDbContext _context;
        public LancheRepository(AppDbContext contexto)
        {
            _context = contexto;
        }

        //Obtem todos os lanches e suas categorias
        public IEnumerable<Lanche> Lanches => _context.Lanches.Include(c => c.Categoria);


        //Lanches Preferidos e suas categorias
        public IEnumerable<Lanche> LanchesPreferidos => _context.Lanches.
                                   Where(l => l.isLanchePreferido).
                                   Include(c => c.Categoria);


        //Lanche Específico pela sua id
        public Lanche GetLancheById(int lancheId)
        {
            return _context.Lanches.FirstOrDefault(l => l.LancheId == lancheId);
        }
    }
}
