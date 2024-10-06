using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{   
    static void Main()
    {
        //int[] inteiros = new int[10];

        //inteiros[0] = 1;
        //inteiros[1] = 10;
        //inteiros[2] = 7;


        //Uma maneira mais facil de fazer o que esta acima
        int[] inteiros = [1, 10, 7];

        //Console.WriteLine(inteiros.Length); 3 elementos
        //Console.WriteLine(inteiros[0]);
        //Console.WriteLine(inteiros[1]);
        //Console.WriteLine(inteiros[2]);


        //aumentando o tamanho do array, isso e muito custoso


        //array de duas dimensoes ou tres um array de 10 linhas e 10 colunas
        int[,] inteiros3 = new int[10, 10];

        inteiros3[0,0] = 1;
        inteiros3[0,3] = 2;

        Console.WriteLine(inteiros3[0,0]);
        Console.WriteLine(inteiros3[0,1]);
        Console.WriteLine(inteiros3[0,2]);
        Console.WriteLine(inteiros3[0,3]);


    }
}