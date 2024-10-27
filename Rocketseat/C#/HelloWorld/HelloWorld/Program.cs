using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {
        /*
                                    While
        O while e uma especie de looping parecido com if  o while podemos traduzir como enquanto, enquanto a variavel
        numero for igual 1 ele vai executar o que esta  no console.wrtileline. Ele pode entrar em looping infinito, para evitar
        isso podemos uma condição dentro do parametro do while e um incremento dentro dele como o numero++;
        
        */

        var numero = 0;
        while(numero < 10)
        {
            Console.WriteLine("Teste, " + numero);
            numero++;
        }
        Console.WriteLine("Saiu");

    }
}