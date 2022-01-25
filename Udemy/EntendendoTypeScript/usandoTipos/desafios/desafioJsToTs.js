"use strict";
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
    sacar(valor) {
        this.saldo -= valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567899', '9875846']
};
// correntista.contaBancaria.depositar(3000)
correntista.contaBancaria.sacar(3000);
console.log(correntista);
