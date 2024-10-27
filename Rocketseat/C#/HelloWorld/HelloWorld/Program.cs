using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {
        /*                                        Return
        * O return também tem como finalidade nos loopings de parar assim como o break a diferença e que um break so pode
        * se usado dentro de um looping ou switch mas no switch e uma exceção o return podemos usar dentro de funções também
        */

        var texto = Teste(5);
        Console.WriteLine(texto);
    }

    static string Teste( int numero)
    {   

        Console.WriteLine("Teste 1");
        if (numero == 5)
        {
            Console.WriteLine("Teste 2");
            return "Lucas";

        }
        Console.WriteLine("Teste 3");
        return "Wellisons";
    }
}