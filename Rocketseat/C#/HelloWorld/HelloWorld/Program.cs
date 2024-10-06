using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{   
    static void Main()
    {
        //dado uma chave associase um valor com essa chave
        Dictionary<int, string> dicionario = new Dictionary<int, string>();


        //Parametros: 1 key sempre int, seguido do texto
        dicionario.Add(1, "Lucas");
        dicionario.Add(2, "Edilaine");
        dicionario.Add(3, "Wellison");

        //trazendo os valores
        string value = dicionario[1];
        Console.WriteLine(value);



        //retorna boleando
        bool existe = dicionario.ContainsKey(1);
        Console.WriteLine(existe);

    }
}