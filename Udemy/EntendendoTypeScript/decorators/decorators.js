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
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('Novo...');
    }
};
Eletrodomestico = __decorate([
    logarObjeto
], Eletrodomestico);
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
new Eletrodomestico();
//!!Alterando Construtor com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//# sourceMappingURL=decorators.js.map