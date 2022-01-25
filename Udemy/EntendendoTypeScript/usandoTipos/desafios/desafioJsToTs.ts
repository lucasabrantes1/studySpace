//Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void,
    sacar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number){
        this.saldo += valor
    },
    sacar(valor: number){
        this.saldo -= valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}


let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567899', '9875846']
}

// correntista.contaBancaria.depositar(3000)
correntista.contaBancaria.sacar(3000)
console.log(correntista)