using System;
using System.Globalization;

namespace ConstrutoresPalavraThisSobreCarga {
    class Produto {

        public string Nome;
        public double Preco;
        public int Quantidade;

        public Produto() {
        }

        public Produto(string nome, double preco) {
            Nome = nome;
            Preco = preco;
        }





        /*Construtor*/



        /*essa sobrecarga é utilizada para permitir a instanciação sem os atributos*/


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
