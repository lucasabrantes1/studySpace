using System.Globalization;

namespace ExercicioFuncionario {
    internal class Program {
        static void Main(string[] args) {

            Funcionario funcionario1, funcionario2;
            funcionario1 = new Funcionario();
            funcionario2 = new Funcionario();


            Console.WriteLine("Dados do primeiro funcionário");
            Console.Write("Nome: ");
            funcionario1.nome = Console.ReadLine();
            Console.Write("Salário: ");
            funcionario1.salario = double.Parse(Console.ReadLine());


            Console.WriteLine("Dados do segundo funcionário");
            Console.Write("Nome: ");
            funcionario2.nome = Console.ReadLine();
            Console.Write("Salário: ");
            funcionario2.salario = double.Parse(Console.ReadLine());


            double media = (funcionario1.salario + funcionario2.salario) / 2;


            Console.WriteLine("Salário médio = " + media.ToString("F2",CultureInfo.InvariantCulture));
        }


    }
}