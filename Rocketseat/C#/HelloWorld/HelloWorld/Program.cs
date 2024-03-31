using HelloWorld.Teste;
using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{   
    static void Main()
    {

        int? idade = null;

        bool informouIdade = idade.Value;

        bool informouIdade2 = idade.HasValue;
    }

}