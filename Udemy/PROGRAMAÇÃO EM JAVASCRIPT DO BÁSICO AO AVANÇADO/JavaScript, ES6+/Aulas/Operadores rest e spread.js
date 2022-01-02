//Esse operador pode ser utilizado para realizar operações de juntar ou espalhar valores, onde por exemplo uma função pode
//Receber um número indeterminado de valores. Rest/Spread -> ...
//onde junte todos os parametros que forem recebidos de uma função em um valor único

function total(...precos){
    let total = 0 
    precos.forEach(p => total += p)
    return total
}

// console.log(total(23.44, 22, 3.45, 5.67).toFixed(2))


//row -- Exemplo 2

let frutas1 = ['Manga','Uva','Melância']
let frutas2 = ['Abacate','Morango','Jaca']

let compras = [...frutas1, ...frutas2]

// console.log(compras)


//row -- Exemplo 3

let alunos = ['Paula', 'Felipe', 'Fernanda']
let novo = 'Joana'

let todosAlunos = [...alunos, novo];
console.log(todosAlunos)