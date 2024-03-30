using HelloWorld.Teste;
using System.Text;

namespace HelloWorld;

class Program
{
    static void Main()
    {   
        //Concatenacao.
        string texto1 = "A primeira frase.";
        string texto2 = "Segunda frase";
         
        string paragrafo = texto1 + " " + texto2;
        string paragrafo2 = $"A primeira frase. {7} {true} segundafrase";
        //Console.WriteLine(paragrafo);
        //Console.WriteLine(paragrafo2);

        StringBuilder stringBuilder = new StringBuilder();

        stringBuilder.Append(paragrafo);
        stringBuilder.Append(paragrafo2);

        string resultado = stringBuilder.ToString();
        //Console.WriteLine(resultado);

        string caminho = @"C:\lucas\teste\file.exe";
        //Console.WriteLine(caminho);



        string texto = "O usuario {0} gosta do numero {1}";
        string resultado2 = string.Format(texto, "Lucas", "9");
        Console.WriteLine(resultado2);

    }

}