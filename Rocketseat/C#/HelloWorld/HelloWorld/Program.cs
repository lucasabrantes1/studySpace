using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {
        //int numero = 0;
        //double saldo = 100.50;
        //bool ativo = false;
        //string autor = "Lucas";
        //List<int> lista = new List<int> { 1, 7 };
        //Cor cor = Cor.Amarelo;

        /*
            > Maior
            < Menor
            >= Maior ou igual
            <= Menor ou igual
            != diferente
            == 
        */



        /// NUMEROS INTEIROS
        //if (numero > 0)
        //{
        //    Console.WriteLine("Este numero e POSITIVO");
        //}
        //else if (numero == 0)
        //{
        //    Console.WriteLine("ESTE numero e NEUTRO");
        //}
        //else
        //{
        //    Console.WriteLine("Este numero e NEGATIVO");
        //}


        // NUMEROS BOLEANOS
        //if (saldo > 100.0)
        //{
        //    Console.WriteLine("Este numero e POSITIVO");
        //}
        //else if (saldo == 0.0)
        //{
        //    Console.WriteLine("ESTE numero e NEUTRO");
        //}
        //else
        //{
        //    Console.WriteLine("Este numero e NEGATIVO");
        //}


        //VALORES BOLEANOS, pra condicionasi boleanas n precisa setar o == para verificar se e true  so colocar a variavel
        // O ponto de exclamação inveter a lógica do booleano setando para false
        //if (!ativo)
        //{
        //    Console.WriteLine("Login efetuado com sucesso!");
        //} else
        //{
        //    Console.WriteLine("Login desativado entrar em contato com a moderação!");
        //}


        //String
        // O ponto de exclamação inveter a lógica da string ou seja o que nao for igual 
        //if (!autor.Equals("Lucas"))
        //{
        //    Console.WriteLine("Login efetuado com sucesso!");
        //}
        //else
        //{
        //    Console.WriteLine("Login errado entrar em contato com a moderação!");
        //}



        //String
        // O ponto de exclamação inveter a lógica da string ou seja o que nao for igual 
        //if (!autor.Equals("Lucas"))
        //{
        //    Console.WriteLine("Login efetuado com sucesso!");
        //}
        //else
        //{
        //    Console.WriteLine("Login errado entrar em contato com a moderação!");
        //}


        //Lista
        // O ponto de exclamação inveter a lógica da string ou seja o que nao for igual 
        //if (lista.Count > 0)
        //{
        //    Console.WriteLine("Login efetuado com sucesso!");
        //}


        //if (lista.Contains(7))
        //{
        //    Console.WriteLine("Login efetuado com sucesso!");
        //}

        //==PARTE 2

        int numero = 0;
        double saldo = 100.50;
        bool ativo = false;
        string autor = "Lucas";
        List<int> lista = new List<int> { 1, 7 };
        Cor cor = Cor.Amarelo;


        //if (cor == Cor.Amarelo && numero < 0)
        //{
        //    Console.WriteLine("Login efetuado com sucesso!");
        //}


        //if (cor == Cor.Amarelo && numero >= 0 && ativo)
        //{
        //    Console.WriteLine("Login efetuado com sucesso!");
        //}


        //if (cor == Cor.Vermelho || numero > 0)
        //{
        //    Console.WriteLine("Login efetuado com sucesso!");
        //}


        //Informações importante: se vc tiver usando o and todas as outras condicoes devem ser verdadeira para
        //entrar dentro do and e o or precisa apenas de uma condiçao verdadeira para entrar dentro do if

        //string mensagemDeErro = null;

        //if (mensagemDeErro is not null && mensagemDeErro.ToUpper().Equals("LUCAS"))
        //{
        //    Console.WriteLine("Entrous");
        //}

        //Console.WriteLine("View :)");


        //No or e quase a mesma coisa ele precisa de apenas 1 valor sendo true se o primeiro for true ele ja via entrar
        
                         //|-- td isso de ser true--|
        if (numero == 0 && (saldo > 100.0 || ativo ))
        {
            Console.WriteLine("Entrou dois");
        }


        //por questoes de manutencao de codigo é essencial tomar cuidado com quantidades exageradas de condiciooes dentro dos paramtros

    }
}