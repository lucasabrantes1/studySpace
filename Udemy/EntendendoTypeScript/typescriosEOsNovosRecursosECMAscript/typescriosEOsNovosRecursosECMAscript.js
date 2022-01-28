"use strict";
//??Let e Const #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
let seraQuePode = '?'; //hoisting (inçadas)
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casado!';
    console.log(acao);
}
// const cpf: string = '411.888.55.8'
// cpf = '44.44.4.4.4.'
// console.log(cpf)
//??Let e Const #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!Let e Const #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/* Tanto let quanto const , tem escopo de bloco, quando em um bloco estara visivel somente la*/
var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = 'def';
    console.log(def);
}
for (let i = 0; i < 0; i++) {
    console.log(i);
}
// console.log(i) //n na pra acessar.
//!!Let e Const #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//??Arrow Function #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*this = referencia de um objeto(contexto atual)*/
//Maneira tradicional de declarar uma função
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
//Função anonima
// function(n1: number, n2:number): number{
//    return n1 + n2
// }
// console.log(somar(2,2))
//Função com nome 
function somarr(n1, n2) {
    return n1 + n2;
}
console.log(somarr(2, 2));
//Função arrow sem chaves  é sempre anonima e não precisa de return
// => indica retorno
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
//Função arrow com chaves precisa do return
const subtrairVersao2 = (n1, n2) => {
    return n1 - n2;
};
console.log(subtrairVersao2(2, 3));
//??Arrow Function #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!Arrow Function #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//Funcao arrow sem parametro
// const saudacao = () => console.log("Olá")
// saudacao()
// const falarCom = (pessoa: string) => console.log('Oi ' + pessoa)
// falarCom('Lucas')
// //This pode variar 
// //Bind significa que o que eu passar como parametro para ele sera usado dentro da fun;'ao como o this
// function normalComThis(){
//    console.log(this)
// }
// const normalComThisEspecial = normalComThis.bind({nome: 'Ana'})
// normalComThis()
// normalComThisEspecial()
// //Arow function com this
// //this????
// console.log(this)
// //PAra saber quem sera o this dentro da função arrow, basta ver quem é o this na linha anterior em que a função definida.
// const arrowComThis = () => console.log(this)
// arrowComThis()
//!!Arrow Function #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//# sourceMappingURL=typescriosEOsNovosRecursosECMAscript.js.map