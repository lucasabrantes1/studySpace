using System.Globalization;
using System.Text;

namespace HelloWorld;

class Program
{
    static void Main()
    {
       DateOnly dia = new DateOnly(2023, 12, 1);

       string diaEmTexto = dia.ToLongDateString();
        //Console.WriteLine(diaEmTexto);


       string diaEmTextoTraduzido = dia.ToString("", new CultureInfo("pt-BR"));
       string diaEmTextoTraduzidoFormatado1 = dia.ToString("d MMMM yyyy", new CultureInfo("pt-BR"));
       string diaEmTextoTraduzidoFormatado2 = dia.ToString("d 'de' MMMM 'de' yyyy", new CultureInfo("pt-BR"));
        //Console.WriteLine(diaEmTextoTraduzidoFormatado2);

        DateTime dia1 = new DateTime(2023, 12, 1, 20, 07, 1);
        DateTime agora = DateTime.Now;
        DateTime hoje = DateTime.Today;
        DateTime hojeUTC = DateTime.UtcNow;
        DateTime novaData = hoje.AddDays(1);

        //Console.WriteLine(dia1);
        //Console.WriteLine(agora);
        //Console.WriteLine(hojeUTC);
        Console.WriteLine(hoje);
        Console.WriteLine(novaData);


    }
}