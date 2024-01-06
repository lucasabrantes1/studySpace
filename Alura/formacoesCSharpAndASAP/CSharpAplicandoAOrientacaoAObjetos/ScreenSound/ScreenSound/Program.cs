Musica musica1 = new Musica();
musica1.Nome = "Ego brain";
musica1.Artista = "System of a down";
musica1.Duracao = 273;
musica2.Disponivel = true;
Console.WriteLine(musica1.disponivel);

Musica musica2 = new Musica();
musica2.Nome = "Vertigo";
musica2.Artista = "U2";
musica2.Duracao = 367;
musica2.Disponivel = false;


musica1.ExibirFichaTecnica();
musica2.ExibirFichaTecnica();

Console.ReadLine();