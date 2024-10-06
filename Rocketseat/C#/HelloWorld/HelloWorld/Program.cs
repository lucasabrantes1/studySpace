using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{   
    static void Main()
    {
        List<string> strings = new List<string>();
        strings.Add("Hello");
        strings.Add("Mundo");
        strings.Add("Lucas");
        strings.Add("Abrantes");
        //Transformando tudo em uma string so
        string resultado = string.Join(" ",strings);
        Console.WriteLine(resultado);




        List<int> ints = new List<int>();
        ints.Add(1);

        List<decimal> decimals = new List<decimal>();
        decimals.Add(2.6m);

        List<bool> bools = new List<bool>();
        bools.Add(true);



        // outras coisas que podemos fazer com listas


        //misturando tipos
        List<object> objects = new List<object>();
        objects.Add("Hello");
        objects.Add(3);
        objects.Add(true);
        //Console.WriteLine(objects.Count);


















    }
}