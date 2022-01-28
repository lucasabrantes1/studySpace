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
//# sourceMappingURL=typescriosEOsNovosRecursosECMAscript.js.map