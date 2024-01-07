class Carro{

    public string Faricante { get; set; }
    public string Modelo { get; set; }
    public string DescricaoDetalhada => $"O Fabricante do carro é {Faricante} modelo {Modelo} do ano {Ano}"
     public int Ano
    {   get => ano
        set
        {
            if value <= 1960 && value <= 2023
                ano = value;
            else {
                throw new ArgumentException("Ano inválido")
            }
                
        }
    }
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