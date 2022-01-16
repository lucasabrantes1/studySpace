function calcular_idade1(ano_nascimento){
    const data = new Date(); //gera a data atual
    const idade = data.getFullYear() - ano_nascimento
    return idade
}

function calcula_idade2(ano_nascimento){
    const data = new Date();
    const idade = data.getFullYear() - ano_nascimento
    // quando não se tem um retorno em uma função não se pode recuperar esse dado pra fazer nada.
    // console.log(idade); 
}

let ret = calcular_idade1(1998)
console.log(ret + 3);

// calcula_idade2(1998) // quando não se tem um retorno em uma função não se pode recuperar esse dado pra fazer nada.



const data = new Date()

// console.log('Data Completa: ' + data);

// console.log('Ano: ' + data.getFullYear());

// console.log('Mes: ' + data.getMonth() - 1 );

//Fique esperto

function somar(n1,n2){
    return n1 + n2
}

console.log(somar(4,6)) //10
console.log(somar(4)) // ?? NaN - not a number
console.log(somar(4,6,8)) //?? 10 - somou apenas os numeor que e esperado
console(somar(4,6,8,3,2,1,19)) //?? 10 - somou apenas os numeor que e esperado