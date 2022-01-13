class App{


    //Constructor
    constructor(){
        //Lista de repositorio
        this.repositories = []

        // Form
        this.formulario = document.querySelector('form')

        //Método para registrar os eventos
        this.registrarEventos() 
    }

    registrarEventos(){
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento)
    }

    adicionarRepositorio(evento){
        //Evita que o formulário recarregue a página.
        evento.preventDefault();
        
        //Adiciona o repositorio na lista.
        this.repositories.push({
            nome: "Nerd Fonts",
            descricao: "Iconic font aggregatos, collection and patcher",
            avatar_url: "http://avatars0.githubusercontent.com/u/8083459?v=4",
            link: "https://github.com/ryanoasis/nerd-fonts"
        })

        //Renderizar a tela
        console.log(this.repositories)
    }

}

new App()