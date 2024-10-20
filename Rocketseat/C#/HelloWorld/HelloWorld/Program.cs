using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {
        /* O switch é uma alternativa ao uso de vários if e else if para verificar diferentes condições. 
         * Com o switch, podemos executar diferentes blocos de código com base no valor de uma variável. 
         * Também vimos que o switch pode ser usado com strings, enums e tipos números. 
         * Além disso, aprendemos sobre a utilização do default para executar um bloco de código quando nenhuma das condições anteriores 
         * é atendida. O switch é uma ferramenta útil para simplificar o código e torná-lo mais legível.*/





        /* Colocando o swithc esta dizendo - verifique crie uma condicao para minha variavel cor
         caso essa varivel cor seja azul, entao executa o que esta dentro e depois de executar usar o break
         para para a execução caso a cor seja azul, e assim podemos fazendo apra os outros casos.
        */


        //Exemplo com enum
        Cor cor = Cor.Azul;
        switch (cor) 
        {
            case Cor.Azul:
                {
                    Console.WriteLine("Azul");
                }
                break;
            case Cor.Amarelo:
                {
                    Console.WriteLine("Amarelo");
                }
                break;
            case Cor.Vermelho:
                {
                    Console.WriteLine("Vermelho");
                }
                break;
            // e a cor view uma cor que nao esta na condicional, neste casso n acontece nada mas se
            // quisermos que aconteça algo utilizamos o default ele vai imprimir um valor default nesse caso
            // o default nao e obrigatorio ser passado.
            default:
                {
                    Console.WriteLine("Outra cor");
                }
                break;
        }





        //Exemplo com texto
        string texto = "Leca";

        switch (texto)
        {
            case "Lucas":
                {
                    Console.WriteLine("Lucas");
                }
                break;
            case "Leca":
                {
                    Console.WriteLine("Leca");
                }
                break;
            case "Cileide":
                {
                    Console.WriteLine("Cileide");
                }
                break;
        }




        //Exemplo com numero, com os numero e possivel colocar comparadores, o case ja verificao = entao nao funcionaria
        int numero = 7;

        switch (numero)
        {
            case >= 7:
                {
                    Console.WriteLine("Lucas");
                }
                break;
            case 1:
                {
                    Console.WriteLine("Leca");
                }
                break;
            case 0:
                {
                    Console.WriteLine("Cileide");
                }
                break;
        }



        //sWITCH TERNARIO 
        

        //minha variavel de comparacao
        int numeroTernario = 8;

        // stirng onde vai ser armazenada        
        string resultado = numeroTernario switch
        {   
            // seguimos o numero seguida do que vai me retornar caso a condicao seja atendida, conseguimso colcoar comparadores tamb[em como >= e etc
            >= 7 => "Lucas", 
            1 => "Willian",
            3 => "Leca",
            //_ (underscore) representa o default
            _ => "Nome desconhecido"
        };

        Console.WriteLine(resultado);

    }
}