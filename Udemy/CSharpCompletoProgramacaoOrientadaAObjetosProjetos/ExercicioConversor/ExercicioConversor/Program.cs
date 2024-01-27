using System;
using System.Globalization;

namespace ExercicioConversor {
    class Program {

        static void Main(string[] args) {
            Console.Write("Qual é a cotação do dólar ? ");
            double cotacao = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Console.Write("Quantos dólares você vai comprar ? ");
            double quantidade = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            Console.WriteLine("Valor a ser pago em reais = " + Conversor.ValorCalculado(quantidade, cotacao).ToString("F2", CultureInfo.InvariantCulture));

        }



    }


}