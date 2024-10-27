using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {
        /*
                                    Do While
        A diferença entre esse e o do while é que o codigo vai ser executado ao menos uma vez, quando a variavel numero de fora tiver 
        o mesmo dnumero do while, por exemplo 10 e 10 a maios diferença com o while é que antes de entrar no while ele checka antes
        no do while ele entra primeiro
        
        */

        var numero = 10;

        do
        {
            Console.WriteLine("Teste, " + numero);
            numero++;
        }
        while (numero < 10);

        // ele vai imprimir 11 pois ele entra pelomenos uma vez no looping
        Console.WriteLine(numero);

    }
}