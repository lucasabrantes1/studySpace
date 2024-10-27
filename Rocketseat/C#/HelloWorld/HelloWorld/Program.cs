using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {
        /*                                        Continue
         * 
         * 
         */

        var numero = 0;
        while(numero < 10) 
        {

            /*                                        Continue
             * Mantendo a condicao de 5, se quisermos pular apenas o numero 5 vamos trocar o break por continue
             * com o continue e interssante movero numero++ para cima pra n ficar injnfinto
             */
            numero++;
            if (numero == 5) 
            {
                continue;
            }

            Console.WriteLine(numero);
            


        }

    }
}