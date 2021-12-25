/*
Objeto -> Um objeto nada mais é do que uma coleção dinâmica de pares chaves e valor exemplo no final
*/

class Pessoa {
  constructor(nome, sobrenome) {
    this._nome = nome;
    this._sobrenome = sobrenome;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get sobrenome() {
    return this._sobrenome;
  }

  set sobrenome(sobrenome) {
    this._sobrenome = sobrenome;
  }

  falar(msg) {
    console.log(`${this.nome} está falando ${msg}`);
  }

  comer() {
    console.log(`${this.nome} está falando comendo...`); //this diz respeito ao objeto que esta executando
  }

  beber() {
    console.log(`${this.nome} ${this.sobrenome} está falando bebendo...`);
  }
}

class Carro {
  constructor(modelo) {
    this._marca = "Honda";
    this._modelo = modelo;
  }

  get marca() {
    return this._marca;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(modelo) {
    this._modelo = modelo;
  }

  inprimir() {
    console.log(` ${this.marca} ${this.modelo}`);
  }
}


//?? Instanciação de objetos --> Forma 1 --> objetos são uma coleção de pares e valores no exemplo ((CHAVE = nome  VALOR ='Programação em JavaScript')) -------------------------------------------------------

//((CHAVE = preco  VALOR = 27.99))

// const curso = new Object()
// curso.nome = 'Programação em JavaScript'
// curso.preco = 27.99


// console.log(curso)

// curso['qtd_alunos'] = 999

// console.log(curso)

// delete curso['qtd_alunos']  //--> é possível deletar dessa maneira

// console.log(curso)


//?? ---------------------------------------------------------Instanciação de ObjetosForma Forma 2 --> Objetos literal ---------------------------------------------------------

const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante:{
        nome: 'Adobe',
        contato: 'lalal@gmail.com',
        endereco:{
            rua: 'lala',
            bairro:'liberdade',
            cidade:'São Paulo',
        },
    filiais:[
        {cidade: 'Rio de janeiro'},
        {cidade: 'Recife'},
    ]    
    }
}

// console.log(programa)

// console.log(programa.nome)//photoshop

// console.log(programa.fabricante.nome)//adobe
// console.log(programa.fabricante.filiais.length)//2

// console.log(programa['fabricante']['filiais'].length) //outra forma de imprimir

// programa.nome = 'Playstatio 05'
// console.log(programa.nome)
// console.log(programa)

// delete programa.fabricante.filiais

// console.log(programa.fabricante.filiais)//undefined

// console.log(programa.fabricante.filiais.length)//Reference erro pq ja foi excluido.



//?? ---------------------------------------------------------> Instanciação de Objetos Forma Forma 3 --> Objetos literal <---------------------------------------------------------

// const pessoa = {}

// console.log(typeof(pessoa))

// pessoa.nome = 'Angelina'

// console.log(pessoa)


//?? -----------------------------------------------> Instanciação de Objetos Forma 4 --> Função construtora <------------------------------------------------------------------------


// function Lampada(cor){
//     this.cor = cor;
// }

// const l1 = new Lampada('Branca')

// console.log(l1)

// console.log(typeof(l1))

//?? -----------------------------------------------> Instanciação de Objetos Forma 5 --> Objeto a partir das nossas classes <------------------------------------------------------------------------

// const p1 = new Pessoa('Lucas', 'Abrantes')
// console.log(p1)
// console.log(typeof(p1))
// console.log(p1.nome) //FUNÇÃO GET
// console.log(p1.sobrenome) //FUNÇÃO GET

// p1.nome = 'Xuxa'; //FUNÇÃO SET
// console.log(p1)

// p1.falar('hI HIHIHIHI') //MÉTODO
// p1.comer() //MÉTODO
// p1.beber() //MÉTODO


const fit = new Carro('Fit')
fit.inprimir()