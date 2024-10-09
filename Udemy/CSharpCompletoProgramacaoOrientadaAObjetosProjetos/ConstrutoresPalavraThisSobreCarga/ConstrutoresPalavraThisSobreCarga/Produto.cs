using System;
using System.Globalization;

namespace ConstrutoresPalavraThisSobreCarga {
    class Produto {

        /*Ordem de implementação:
         1 - Atributos privados
         2 - Propriedades autoimplementadas
         3 - Construtores
         4 - Propriedades customizadas
         5 - Outros métodos da classe
        */

        /*O nome não tem prop, pois tem uma logica particular*/

        /*1 - Atributo privativo*/
        private string _nome;

        /*2 - Propriedade autoimplementadas*/
        public double Preco { get; private set; }
        public int Quantidade { get; private set; }



        /*3 - Construtores*/
        public Produto() {
        }

        /*3 - Construtores*/
        public Produto(string nome, double preco, int quantidade) {
            Nome = nome;
            Preco = preco;
            Quantidade = quantidade;
        }


        /*4 - Propriedades customizadas*/
        /*Logica particular do nome*/
        public string Nome {
            get { return _nome; }

            set {
                if (value != null && value.Length > 1) {
                    _nome = value;
                }
            }
        }





        /*5 - Outros métodos da classe*/
        public double ValorTotalEmEstoque {
            get { return Preco * Quantidade; }
        }

        public void AdicionarProdutos(int quantidade) {
            Quantidade += Quantidade;
        }


        public void RemoverProdutos(int quantidade) {
            Quantidade -= Quantidade;
        }


        public override string ToString() {
            return _nome
            + ", $ "
            + Preco.ToString("F2", CultureInfo.InvariantCulture)
            + ", "
            + Quantidade
            + " unidades, Total: $ "
            + ValorTotalEmEstoque.ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}
