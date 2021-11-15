var numero = 42
// console.log(numero)

numero = numero + 18
// console.log(numero)

//Let

let outroNumero = 42
// console.log(outroNumero)

outroNumero = 42 + 18
// console.log(outroNumero)

/*
Variavel = Está variando
a variavél let so é visivel dentro daquele escopo
*/

for(var i = 0; i<5; i++){
    var valor = i * 3
    // console.log(valor)
}

// console.log(valor)
// console.log(i)



// let numero = 80
// console.log(numero)

// let numero = 32 --> syntaxError
// console.log(numero)


/*Const se mantem constante
se definirmo uma const taxa com 1.44 ela ira se manter por todo o programa.
*/

const TAXA = 1.44

let rest = 45 * TAXA
console.log(rest)


const curso = {nome: "Programação em JavaScript"};
//console.log(curso.nome);

// Não posso alterar o valor de uma constante
//curso = 43; // Erro!

// Podemos realizar mutação em dados contidos na constante
curso.nome = "Programação em Python"; // Mutação
//console.log(curso);


/*
Dicas de como declarar variáveis em JavaScript:

- A variável poderá ser alterada? (vai variar?) se sim, use let
- A variável será constante? (não vai variar?) se sim, use  const
*/

const valor = 5;

for(let i = 0; i < valor; i++){
    console.log(valor - i);
}