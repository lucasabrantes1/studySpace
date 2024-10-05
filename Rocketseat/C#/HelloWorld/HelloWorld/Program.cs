using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{   
    static void Main()
    {
       int? idade = null;

       bool informouIdade= idade.HasValue;
       int informouIdade2 = idade.Value;

    }
}