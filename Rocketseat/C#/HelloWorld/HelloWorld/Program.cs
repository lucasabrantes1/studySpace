using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{   
    static void Main()
    {
        List<int> inteiro = new List<int>();

        inteiro.Add(1); //index 0 
        inteiro.Add(2); //index 0
        //inteiro.Remove(1);

        int primeiroElemento = inteiro.First();
        int ultimoElemento = inteiro.Last();
        int elementoNaPosicao = inteiro.ElementAt(2);
        inteiro.RemoveAt(0); //remove na posicao
        inteiro.Clear(); //remove todos os elementos da lista

        //Console.WriteLine(inteiro.Count);
        //Console.WriteLine(inteiro[0]);

        //Console.WriteLine(ultimoElemento);
        //Console.WriteLine(primeiroElemento);
        Console.WriteLine(elementoNaPosicao);


    }
}