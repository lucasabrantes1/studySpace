class ContaBancaria
{
    public int numeroIndicador;
    public string titular;
    public double saldo;
    public string senha;

    public void ExibirContaBancaria()
    {
        Console.WriteLine($"Número indicador: {numeroIndicador}");
        Console.WriteLine($"Titular: {titular}");
        Console.WriteLine($"Saldo: {saldo}");
        Console.WriteLine($"Senha: {senha}");
    }
}
