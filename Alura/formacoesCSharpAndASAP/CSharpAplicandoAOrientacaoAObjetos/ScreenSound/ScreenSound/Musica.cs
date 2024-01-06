class Musica
{
    public string Nome {  get; set; }

    public string Artista { get; set; }

    public int Duracao { get; set; }

    public bool Disponivel { get; set; }

    public string NomeCompleto { get; set; }

    public void ExibirFichaTecnica(){
        Console.WriteLine($"Nome: {Nome}");
        Console.WriteLine($"Artista: {Artista}");
        Console.WriteLine($"Duração: {Duracao}");
        Console.WriteLine($"Disponível: {Disponivel}");
        if(Disponivel == true){
            Console.WriteLine("Disponível no plano\n");
        }
        else { Console.WriteLine("Adquira o plano Plus+\n");
        }
    }
}
