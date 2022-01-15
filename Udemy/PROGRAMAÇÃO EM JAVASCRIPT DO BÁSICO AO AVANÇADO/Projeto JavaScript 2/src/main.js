class App{


    //Constructor
    constructor(){
        //Lista de repositorio
        this.repositorios = []

        // Form
        this.formulario = document.querySelector('form')

        //Lista
        this.lista = document.querySelector('.list-group')

        //Método para registrar os eventos
        this.registarEventos() 
    }

 
    registarEventos(){
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);
    }

    adicionarRepositorio(evento){
        //Evita que o formulário recarregue a página.
        evento.preventDefault();
        
        //Adiciona o repositorio na lista.
        this.repositorios.push({
            nome: "Nerd Fonts",
            descricao: "Iconic font aggregatos, collection and patcher",
            avatar_url: "http://avatars0.githubusercontent.com/u/8083459?v=4",
            link: "https://github.com/ryanoasis/nerd-fonts"
        })

        //Renderizar a tela
        this.renderizarTela()
    }

    renderizarTela(){
        //Limpar o conteúdo de lista
        this.lista.innerHTML = '';

        //Percorre toda a lista de repositórios e criar o elemntos
        this.repositorios.forEach(repositorio => {

            //<li>
            let li = document.createElement('li')
            li.setAttribute('class','list-group-item list-group-item-action');

            //<img>
            let img = document.createElement('img')
            img.setAttribute('src',repositorio.avatar_url)
            li.appendChild(img)

            //<strong>
            let strong = document.createElement('strong')
            let txtNome = document.createTextNode(repositorio.nome)
            strong.appendChild(txtNome)
            li.appendChild(strong)

            //<p>
            let p = document.createElement('p')
            let txtDescricao = document.createTextNode(repositorio.descricao)
            p.appendChild(txtDescricao)
            li.appendChild(p)

            //<a>
            let a = document.createElement('a')
            a.setAttribute('taget','_blank')
            a.setAttribute('href', repositorio.link)
            let txtA = document.createTextNode('Acessar')
            a.appendChild(txtA)
            li.appendChild(a)

            // Adicionar <li> como filho da ul
            this.lista.appendChild(li)

            //Limpar o conteúdo do input
            this.formulario.querySelector('input[id=repositorio]').value = ''

            //Adiciona o foco no input
            this.formulario.querySelector('input[id=repositorio]').focus()
        })

    }

}

new App()