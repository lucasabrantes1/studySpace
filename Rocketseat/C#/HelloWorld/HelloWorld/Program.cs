using HelloWorld;
using Microsoft.VisualBasic;

class Program
{
    static void Main()
    {
        /*
                                    ForEach
        No caso de lista coleções existe uma maneira melhor de reproduzir o for a baixo, ao invez de fazer esse for
        fazemos o for each 
       
        */
        var lista = new List<string> { "Eder", "Leca", "Edilaine" };
        for (int i = 0; i < lista.Count; i++)
        {
            //Console.WriteLine(lista[i]);
        }


        /*Exemplo de for each do for acima melhorado no for each pra cada item da minha lista ele e armazenado na variavel
         item e quando chegar no final dessa lista ele entao ecerra.  e muito utilizado quando trabalanhos com uma colecao
        de dados.*/
        var lista2 = new List<string> { "Mazda", "Mercedes", "Porsche", "BMW" };
        foreach (var item in lista2) 
        { 
            //Console.WriteLine($"{item}");
        }


        /*Trabalhando com colecao de dados  e foreach*/
        var dicionario = new Dictionary<string, string>();
        dicionario.Add("Nome1", "Mazda");
        dicionario.Add("Nome2", "Mercedes");
        dicionario.Add("Nome3", "Porsche");

        /*O item a baixo e um keyvaluepair que e chave e o meu valor.*/
        foreach(var item2 in dicionario)
        {
            Console.WriteLine(item2);
            //Console.WriteLine(item2.Key); // aqui ira mostrar apenas as chaves (primeira posicao )
            //Console.WriteLine(item2.Value); // aqui ira mostrar os valores (segunda posicao)

        }

    }
}