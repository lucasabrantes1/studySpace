using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {


        // if normal
        //int numero = 7;
        //string autor;


        //if (numero == 7)
        //{
        //    autor = "Lucas";
        //}
        //else
        //{
        //    autor = "Ouken";
        //}

        //Console.WriteLine(autor);


        // if ternario so tem pra if e else
        int numero = 0;
        //na logica do ternario o ? indica o se(if) e o ; else
        //na logica do ternario o ? indica o se(if) e o ; else
        // se numero == 7 for verdade
        //? entao faça iisso  Lucas
        //: se nao Willian
        string autor = numero == 7 ? "Lucas" : "Willian";

        //com mais condicoes
        string autor2 = numero == 7 || numero > 100 ? "Lucas" : "Willian";
        string autor3 = numero == 7 && numero > 100 ? "Lucas" : "Willian";

        Console.WriteLine(autor);

    }
}