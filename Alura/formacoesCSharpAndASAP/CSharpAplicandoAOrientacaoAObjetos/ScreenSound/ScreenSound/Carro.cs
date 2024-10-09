class Carro
{
    private int _ano;

    public string Fabricante { get; set; }

    public int Ano
    {
        get { return _ano; }
        set
        {
            if (value >= 1960 && value <= 2023)
                _ano = value;
            else
                throw new ArgumentException("O ano deve estar entre 1960 e 2023.");
        }
    }

    public string Modelo { get; set; }

    public string DescricaoDetalhada => $"O Fabricante do carro é {Fabricante} modelo {Modelo} do ano {Ano}";

    public void buzinar()
    {
        Console.WriteLine("Beep-Beep Beep-Beep!");
    }

    public void acelerar()
    {
        Console.WriteLine("Vrum Vrum !!");
    }


    public void frear()
    {
        Console.WriteLine("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!!");
    }
}