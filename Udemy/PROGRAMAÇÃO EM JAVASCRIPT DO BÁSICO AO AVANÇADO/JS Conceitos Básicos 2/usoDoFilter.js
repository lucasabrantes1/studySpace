/*Filtra, vamos suport que se tenha um array com dados e vc quer filtrar apenas valores pares, gerando um novo array com esses elementos, para iss oque serve o filter*/

var numeros = [1,2,3,4,5,6,7,8,9,10]


function filtrar_pares(n){
    return n % 2 === 0
}
// console.log(filtrar_pares(3))//false
// console.log(filtrar_pares(8))//true

function filtrar_impares(n){
    return n % 2 !== 0
}

function filtrar_multiplos_5(n){
    return n % 5 === 0
}

var ret = numeros.filter(filtrar_pares)
//console.log(ret)

ret = numeros.filter(filtrar_impares)
// console.log(ret)

ret = numeros.filter(filtrar_multiplos_5)
//console.log(ret)




var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3},
]

function filtrarNotasMaioresQue8(alunos){
    return alunos.nota > 8
}


var filtrados = alunos.filter(filtrarNotasMaioresQue8)
console.log(filtrados)