using HelloWorld.Teste;
using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{   
    static void Main()
    {
        var matematica = new OperacoesMatematicas();
        matematica.Adicionar(valor1: 1, valor2: 7);
    }

}