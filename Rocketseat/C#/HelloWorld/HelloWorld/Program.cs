using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {
        /*
                                    For

        No C# temos a possibilidadde de usar os loopings que [e basicamente a chamada do mesmo codigo em sequencia
        do mesmo código. Então dada uma determinada condição eu quero executar esse mesmo codigo várias vezes
        e pra gente entender o for vamo usar um exemplo bem fácil e ilustrando esse processo. por exemplo precisamos
        caminhar 10 metros eu precisa de três informações de onde vou começar, quantos metros eu preciso andar, e a terceira
        saber quantos metros apenas um passo meu vai cobrir 10 mestros, eu começo na posição 0 e vamos supro que cada passo seja 
        igual a 5 e vamos caminhar até dar 10.
        */


        /*No meu exemplo a baixo 0 e ondeu estou, não comecei a caminhar, i é onde vamos chegarm ou seeja enquanto esse i for 
         menor que 10 eu preciso ta fazendo esse looping dando mais e mais passo o i++ significa i+1 que ta me dizendo que 
        a variavel i vai receber por ter um novo valor que e o valor anterior ao atual. ou seja via representar quantos metros por passo
        vamos dar o i pode começar com um valor inicial também como pór exemplo 1,  e o i++ é a mesma coisa que i = i + 1* e possivel fazer de 2 e 2 também por exemplo i = i + 2 */
        for (int i = 0; i < 10; i++)
        {
            Console.WriteLine("Lucas andou " + i + " Metros");
        }



        var lista = new List<string> { "Eder", "Leca", "Edilaine" };
        /*Podemos descobir o tamanho de uma lista com o for veja o exemplo a baixo, ele vai executar de 0 ate o tamanho da lista */
        for (int i = 0; i < lista.Count; i++)
        {
            Console.WriteLine(lista[i]);
        }

    }
}