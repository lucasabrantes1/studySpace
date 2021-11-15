/*

*/

function soma3(idade){
    return idade + 3
}

const idade = 19
const nome = 'Geek'

// console.log(nome + ' tem ' + idade + ' anos. ') --> feio

//Template String
console.log(`${nome} tem ${soma3(idade)} anos`) //--> bonito


/*Em template string usa-se cras e n'ao aspas simples `*/