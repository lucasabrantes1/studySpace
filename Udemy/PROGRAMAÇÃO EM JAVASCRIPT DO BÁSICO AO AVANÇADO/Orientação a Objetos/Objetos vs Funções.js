// no js mesmo quando se cria classe no fundo é tudo função

//?? Criando objeto através de uma factory function

// const pessoa = (nome, sobrenome) => {
//     return {
//         andar: () => console.log(`${nome} ${sobrenome} está andando...`)
//     }
// }

// const p1 = pessoa('Lucas', 'Abrantes')
// console.log(p1)
// console.log(typeof(p1))
// p1.andar()

//?? Criando objeto através de uma função construtora

// function Pessoa2 (nome, sobrenome){
//     this.nome = nome
//     this.sobrenome = sobrenome

//     this.andar = function(){
//         console.log(`${this.nome} ${this.sobrenome} Está andando ...`)
//     }
// }

// const p2 = new Pessoa2('Lucas', 'Abrantes')
// console.log(p2)
// console.log(typeof(p2))
// p2.andar()



//?? Criando objeto através de uma classe

class pessoa3{
    constructor(nome, sobrenome){
       this.nome = nome
       this.sobrenome = sobrenome 
    }

    andar(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

const p3 = new pessoa3('Lucas', 'Abrantes')
console.log(p3)
console.log(typeof(p3))
p3.andar()