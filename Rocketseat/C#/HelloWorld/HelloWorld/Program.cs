namespace HelloWorld;

class Program
{
    static void Main()
    {
        //variaveis tipo texto

        //char
        //string
        char letra = 'a';
        char numero = '1';
        char caracter = '@';
        char espaco = ' ';

        string texto = "Este curso e muito bom";
        char primeiraLetraDoTexto = texto[0];
        //Console.WriteLine(texto);
        //Console.WriteLine(primeiraLetraDoTexto);


        string meuNome = "                    Lucas Abrantes              ";
        string nomeSemEspaco = meuNome.Trim();

        //Console.WriteLine(meuNome);
        //Console.WriteLine(nomeSemEspaco);


        bool comecaComALetraL = nomeSemEspaco.StartsWith("l");
        bool terminaComALetraL = nomeSemEspaco.EndsWith("L");
        //Console.WriteLine(comecaComALetraL);
        //Console.WriteLine(terminaComALetraL);


        string textoAposreplace = nomeSemEspaco.Replace('L', '7');
        //Console.WriteLine(textoAposreplace);


        bool existe = texto.Contains("lucas");
        //Console.WriteLine(existe);


        bool eIgual = texto.Equals("Este curso e muito bom");
        Console.WriteLine(eIgual);


    }
}