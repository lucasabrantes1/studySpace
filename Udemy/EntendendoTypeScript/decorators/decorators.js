"use strict";
//!!Criando Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// /*O decorator é uma função, e essa função*/
// @logarClasseSe(false)
// // @logarClasse
// class Eletrodomestico{
//     constructor(){
//         console.log('Novo...')
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function logarClasse(construtor: Function){
//     console.log(construtor)
// }
//??Decorator Factory --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// function logarCLaseSe(valor: boolean){
//     return valor ? logarClasse : null
// }
//??Decorator Factory --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!Alterando Construtor com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// @logarClasseSe(true)
// @logarObjeto
// class Eletrodomestico {
//     constructor(){
//         console.log('Novo...')
//     }
// }
// type Construtor = {new(...args: any[]): {}}
// function logarObjeto(construtor: Construtor){
//     console.log('Carregado...')
//     return class extends construtor {
//         constructor(...args: any[]) {
//             console.log('Antes...')
//             super(...args)
//             console.log('Depois...')
//         }
//     }
// }
// new Eletrodomestico()
//!!Alterando Construtor com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//??Adicionando Método com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// interface Eletrodomestico {
//     imprimir?(): void
// }
// @imprimivel
// class Eletrodomestico {
//     constructor(){
//         console.log('Novo...')
//     }
// }
// function imprimivel(constructor: Function){
//     constructor.prototype.imprimir = function(){
//         console.log(this)
//     }
// }
// // (<any>new Eletrodomestico()).imprimir()
// // (<any>new Eletrodomestico()).imprimir()
// const eletro = new Eletrodomestico()
// eletro.imprimir && eletro.imprimir()
//??Adicionando Método com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!Decorator de Método --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    congelar
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.570);
cc.sacar(5000);
console.log(cc.getSaldo());
// cc.getSaldo = function(){
//     return this['saldo'] + 7000
// }
console.log(cc.getSaldo);
// Object.freeze
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
//!!Decorator de Método --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//# sourceMappingURL=decorators.js.map