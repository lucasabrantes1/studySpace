class ContaBancaria
{
    public int NumeroIndicador { get; set; };
    public string Titular { get; set; };
    public double saldo { get; set; };
    public string saldo { get; set; };

    public void ExibirContaBancaria()
    {
        Console.WriteLine($"Número indicador: {NumeroIndicador}");
        Console.WriteLine($"Titular: {Titular}");
        Console.WriteLine($"Saldo: {saldo}");
        Console.WriteLine($"Senha: {saldo}");
    }
}
