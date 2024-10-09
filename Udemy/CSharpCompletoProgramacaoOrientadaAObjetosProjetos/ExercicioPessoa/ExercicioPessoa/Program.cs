using System;
using System.Globalization;

namespace ExercicioPessoa {
    internal class Program {
        static void Main(string[] args) {
            Pessoa pessoa1, pessoa2;
            pessoa1 = new Pessoa();
            pessoa2 = new Pessoa();
            
            Console.Write("Dados da primeira pessoa:\nNome: ");
            pessoa1.nome = Console.ReadLine();
            Console.Write("Idade: ");
            pessoa1.idade = int.Parse(Console.ReadLine());


            Console.Write("Dados da Segunda pessoa:\nNome: ");
            pessoa2.nome = Console.ReadLine();
            Console.Write("Idade: ");
            pessoa2.idade = int.Parse(Console.ReadLine());


            if(pessoa1.idade > pessoa2.idade) {
                Console.Write("Pessoa mais velha: " + pessoa1.nome);
            } else
                Console.Write("Pessoa mais velha: " + pessoa2.nome);

            Console.ReadLine();
        }
    }


}