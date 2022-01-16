//Básicamente o for of facilita a utilização do for com a integração de coleções.(map, set e etc)

let nome = 'Geek University'
//Aqui é possível imprimir cada letra pois uma string é nada mais menos do que um array de caracteres
for(let letter of nome){
    // console.log(letter)
}



let numeros = [1,2,3,4,5]

for(let numero of numeros){
    // console.log(numero * 2 )
}


for(let indice in numeros){
    // console.log(`indice: ${indice}, Valor: ${numeros[indice]}`)
}

let cursos = new Map([
    [1, '2'],
    [2, '3'],
    [3, '4'],
    [4, '5'],
    [5, '6'],
])

// for (let curso of cursos){
//     console.log(`${curso[0]} - ${curso[0]}`)
// }


//Somente a chave
for(let chave of cursos.keys()){
    // console.log(chave)
}

//Somente ao valor
for(let valor of cursos.values()){
    // console.log(valor)
}

//Chave e valor
for(let [chave, valor] of cursos.entries()){
    // console.log(`${chave} - ${valor}`)
}

//Acesando elementos de um conjunto
let conjunto = new Set([1,2,3,4,5])

for(let numero of conjunto){
    // console.log(numero)
}