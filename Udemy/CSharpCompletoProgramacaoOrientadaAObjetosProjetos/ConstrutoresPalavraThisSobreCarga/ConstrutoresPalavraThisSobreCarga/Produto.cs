using System;
using System.Globalization;

namespace ConstrutoresPalavraThisSobreCarga {
    class Produto {

        public string Nome;
        public double Preco;
        public int Quantidade;

        /*Construtor*/
        public Produto(string nome, double preco, int quantidade) {
            Nome = nome;
            Preco = preco;
            Quantidade = quantidade;
        }

        public double ValorTOtalEmEstoque() {
            return Preco * Quantidade;
        }


        public void AdicionarProdutos(int quantidade) {
            Quantidade += quantidade;
        }


        public void RemoverProdutos(int quantidade) {
            Quantidade -= quantidade;
        }


        public override string ToString() {
            return Nome
                + ", $ "
                + Preco.ToString("F2", CultureInfo.InvariantCulture)
                + ", "
                + Quantidade
                + " unidades, Total: $ "
                + ValorTOtalEmEstoque().ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}
