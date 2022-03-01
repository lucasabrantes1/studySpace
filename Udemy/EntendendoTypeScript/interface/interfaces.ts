interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = "Joana"
}

const pessoa: Humano = {
    nome: 'Lucas',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Olá, meu nome é '
        + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'Jonas', idade: 27, xyz: true})
pessoa.saudar('Skywalker')


//usando classe
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)