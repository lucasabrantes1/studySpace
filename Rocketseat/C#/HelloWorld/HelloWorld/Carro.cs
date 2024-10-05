namespace HelloWorld;
class Carro
{
    public void Ligar()
    {
        Console.WriteLine("Carro LIGADO");
    }

    public void Desligar()
    {
        Console.WriteLine("Carro DESLIGADO");
    }

    private void Teste1()
    {
        Console.WriteLine("Teste1");
    }

    internal void Teste2()
    {

        Teste1();
        Console.WriteLine("Teste2");
    }
}
