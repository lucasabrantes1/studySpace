using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{
    static void Main()
    {
        string texto1 = "A primeira frase.";
        string texto2 = "A segunda frase";

        string paragrafo = texto1 + " " + " " + 7 + " " + true + " "  + texto2;
        //Console.WriteLine(paragrafo);


        string caminho = @"C:\teste\outrapasta\local";
        //Console.WriteLine(caminho);


        string paragrafo2 = $"A primeira frase. {7} {true} segunda frase...";
        //Console.WriteLine(paragrafo2);

        //Melhor economia de memoria
        StringBuilder stringBuilder = new StringBuilder();

        stringBuilder.Append(paragrafo);
        stringBuilder.Append(paragrafo2);

        string resultado = stringBuilder.ToString();
        //Console.WriteLine(resultado);




        string texto = "O usuario {0} gosta do numero {1}";

        string resultado2 = string.Format(texto, "Lucass", 7);

        Console.WriteLine(resultado2);

    }
}