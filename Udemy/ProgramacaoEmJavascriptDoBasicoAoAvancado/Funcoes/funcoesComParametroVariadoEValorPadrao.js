/*imagine criar uma funcao que não recebe nada como argumento mas que na sua execução vc pode passar quantos argumentos quiser
mesmo que não se passe nada para uma função o javascript cria um array padrao chamado argumentos. E cada valor passado para função vai ser colocado
dentro do array arguments.
*/
function somar1(){
    let soma = 0
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma
}

// console.log(somar1())
// console.log(somar1(2))
// console.log(somar1(2, 5))
// console.log(somar1(5, 3, 9))
// console.log(somar1(2,4,6,8,12))


function imprimeValores(n1, n2){
    for(let i in arguments){
        console.log(arguments[i])
    }
}

// imprimeValores(4,6,8)

/*Valores padrão - de um parametro padrão forma atual*/

function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3
}

// console.log(somar4(4,5,6)); 


function somar5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3
    }else{
        return 'Não foi possível efetuar a soma'
    }
}

console.log(somar5(4,5,6)); 
console.log(somar5('a4',false,6));
