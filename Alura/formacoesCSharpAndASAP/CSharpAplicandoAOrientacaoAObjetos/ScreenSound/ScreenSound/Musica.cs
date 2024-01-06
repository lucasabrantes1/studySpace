class Musica
{
    public string nome;
    public string artista;
    public int duracao;
    public bool disponivel;

    public void ExibirFichaTecnica(){
        Console.WriteLine($"Nome: {nome}");
        Console.WriteLine($"Artista: {artista}");
        Console.WriteLine($"Duração: {duracao}");
        Console.WriteLine($"Disponível: {disponivel}");
        if(disponivel == true){
            Console.WriteLine("Disponível no plano\n");
        }
        else { Console.WriteLine("Adquira o plano Plus+\n");
        }
    }
}
