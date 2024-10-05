using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{   
    enum NivelDeDificuldade
    {
        Baixo = 0, 
        Medio = 1,
        Alto = 2
    }
    static void Main()
    {
        NivelDeDificuldade nivel = NivelDeDificuldade.Alto;
        Console.WriteLine(nivel);

        int nivelInteiro = (int)nivel;
        Console.WriteLine(nivelInteiro);
    }
}