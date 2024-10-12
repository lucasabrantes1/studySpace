namespace HelloWorld;

public class OperacoesMatematicas
{
    public (int resultadoDaAdicao, string autor) Adicionar(int valor1, int valor2)
    {
        var resultado = valor1 + valor2;

        return (resultado, "Lucas");
    }


    public void Teste(int valor1, int valor2 = 7)
    {
        Console.WriteLine(valor1 + valor2);
    }
}
