using System;
using System.Globalization;

namespace Exercicio2 {
    class Program {
        static void Main(string[] args) {
            Funcionario funcionario = new Funcionario();

             Console.Write("Nome: ");
             funcionario.Nome = Console.ReadLine();

            Console.Write("Salario bruto: ");
            funcionario.SalarioBruto = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);


            Console.Write("Imposto: ");
            funcionario.Imposto = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            Console.WriteLine(funcionario);

            Console.Write("Digite a porcentagem para aumentar o salário: ");
            double porcentagem = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            funcionario.AumentarSalario(porcentagem);

            Console.WriteLine("Dados atualizados: " + funcionario);

        }
    }

}