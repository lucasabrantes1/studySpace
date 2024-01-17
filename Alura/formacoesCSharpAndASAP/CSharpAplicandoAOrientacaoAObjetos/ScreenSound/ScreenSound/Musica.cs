class Musica
{   
    public Musica(Banda artista, string nome)
    {
        Artista = artista;
        Nome = nome;  
    }

    public string Nome {  get; }

    public Banda Artista { get; }

    public int Duracao { get; set; }

    public bool Disponivel { get; set; }

    public string DescricaoResumida =>
        $"A musica {Nome} pertence a banda {Artista}";  

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