using LanchesMac.Context;
using Microsoft.EntityFrameworkCore;

namespace LanchesMac.Models
{
    public class CarrinhoCompra
    {

        private readonly AppDbContext _context;

        public CarrinhoCompra(AppDbContext context)
        {
            _context = context;
        }

        public string CarrinhoCompraId { get; set; }
        public List<CarrinhoCompraItem> CarrinhoCompraItems { get; set; }

        public static CarrinhoCompra GetCarrinho(IServiceProvider services)
        {
            //Define uma sesssão
            ISession session =
                services.GetRequiredService<IHttpContextAccessor>()?.HttpContext.Session;

            //obtem um serviço do tipo do nosso contexto
            var context = services.GetService<AppDbContext>();

            //obtem ou gera o id do carriho
            string carrinhoId = session.GetString("CarrinhoId") ?? Guid.NewGuid().ToString();

            //atribui o id do carrinho na sessão
            session.SetString("CarrinhoId", carrinhoId);

            return new CarrinhoCompra(context)
            {
                CarrinhoCompraId = carrinhoId
            };
        }


        public void AdicionarAoCarrinho(Lanche lanche)
        {
            var carrinhoCompraItem = _context.CarrinhoCompraItens.SingleOrDefault(
                //verifica se existe um lanche com o id que eu quero incluir e se existe um
                //carrinho de compra que eu obtive da session ou eu atribui
                s => s.Lanche.LancheId == lanche.LancheId &&
                s.CarrinhoCompraId == CarrinhoCompraId);

            //Se carrinhoCompraItem for null significa que o lanche não existe no carrinho
            if (carrinhoCompraItem == null)
            {
                carrinhoCompraItem = new CarrinhoCompraItem
                {
                    //Atribuiremos o id do carrinho que ou pegou da session ou foi criado
                    CarrinhoCompraId = CarrinhoCompraId,
                    //Atribui o lanche que quero a prop lanche
                    Lanche = lanche,
                    //Como é o primeiro lanche 1
                    Quantidade = 1
                };
                //No meu contexto vou incluir o item no meu carinho
                _context.CarrinhoCompraItens.Add(carrinhoCompraItem);
            }
            //Caso o contrario o item seja diferente de null ele ja existe entao basta incrementar
            else
            {
                carrinhoCompraItem.Quantidade++;
            }
            //Persiste isso no banco de dados utilizando o contexto
            _context.SaveChanges();
        }


        public int RemoverDoCarrinho(Lanche lanche)
        {
            //Verifica se esse item existe na tabela carrinhocompraitens
            var carrinhoCompraItem = _context.CarrinhoCompraItens.SingleOrDefault(
                  //verifica se existe um lanche com o id que eu quero incluir e se existe um
                  //carrinho de compra que eu obtive da session ou eu atribui
                  s => s.Lanche.LancheId == lanche.LancheId &&
                  s.CarrinhoCompraId == CarrinhoCompraId);

            var quantidadeLocal = 0;

            if (carrinhoCompraItem != null)
            {   //Verifica a quantidade dos itens(lanches)
                if (carrinhoCompraItem.Quantidade > 1)
                {
                    //Se for >1 decrementa
                    carrinhoCompraItem.Quantidade--;
                    quantidadeLocal = carrinhoCompraItem.Quantidade;
                }
                else
                {   //Se so tiver 1 remove do carrinho
                    _context.CarrinhoCompraItens.Remove(carrinhoCompraItem);
                }
            }
            _context.SaveChanges();
            return quantidadeLocal;
        }


        public List<CarrinhoCompraItem> GetCarrinhoCOmpraItens()
        {   
            //Retorna uma instância dos itens do carrinho de compra se não for igual a null
            return CarrinhoCompraItems ?? 
                (CarrinhoCompraItems =
                //Se for igual a null usando o contexto verifica na tabela carrinhocompraitens 
                _context.CarrinhoCompraItens
                //Obtem todos os carrinhos pelo id 
                .Where(c => c.CarrinhoCompraId == CarrinhoCompraId)
                //Obtem os carrinhos com o seus itens
                .Include(s => s.Lanche)
                //Após obter tudo retorna uma lista
                .ToList());
        }


        public void LimparCarrinho()
        {
            //Obtem os itens do carrinho com base no id
            var carrinhosItens = _context.CarrinhoCompraItens
                                .Where(carrinho => carrinho.CarrinhoCompraId == CarrinhoCompraId);
            //Utiliza a instancia do contexto para remover todas as entidades do carrinho que for selecionada
            _context.CarrinhoCompraItens.RemoveRange(carrinhosItens);
            //Salva 
            _context.SaveChanges();
        }


        public decimal GetCarrinhoCompraTotal() 
        {
            var total = _context.CarrinhoCompraItens
            //Filtra por um carrinho especifico atraves da id
            .Where(c => c.CarrinhoCompraId == CarrinhoCompraId)
            //Pro carrinho filtrado seleciona o preco e qtd  multiplicando o preco pela qtd e retorna a sum
            .Select(c => c.Lanche.Preco * c.Quantidade).Sum();

            return total;
        }

    }
}
