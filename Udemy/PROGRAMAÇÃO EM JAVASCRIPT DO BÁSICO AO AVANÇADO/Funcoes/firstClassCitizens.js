/*Funções: Uma função nada mais é do que um elemento da programação que realiza alguma ação*/
/*Functio e o nome da função, dentro de parenteses podemos ou não declarar argumentos de entrada para executar essa função, no caso num1 e num2, abro chaves e fecho chaves. 
e dentro da chaves está o que que a função executa. Ou seja retornara a soma do número 1 e n2 que são os parametros passados entre parenteses. A sua ação é retornar o n1 + n2
e retornara o valor e ambos. Para executar a função basta colocar o nome  da function com () passando os argumentos
*/

function somar(num1, num2){  
    return num1 + num2
}

//execução 1
let res = somar(4, 6)
// console.log(res)
//execução 2
// console.log(somar(10,5))

/*
A linguagens de programações possuem partes importantes, e no javascrips as funções são as partes mais importantes. No caso do js as funções são chamadas de cidadões de 
primeira classe, o que significa que podemos usar funções como qualquer outro tipo de dado. Veja o Exemplo abaixo
*/

//Exemplo 1  - cidadões de primeira classe - veja que foi utilizado executar como se fosse qualquer outro dado.
const executar = somar;
// console.log(executar(8,7))

//Exemplo 2  - cidadões de primeira classe - passando uma função para outra função, passa-se somente parenteses para executar uma função
function subtrair(n1, n2){
    return n1 - n2
}

function fazAlgo(n1, n2, funcao){
    return funcao(n1, n2)
}

console.log(fazAlgo(5, 5, somar))
console.log(fazAlgo(8, 3, subtrair))

//Explicação; quando se passa somente o nome da função, porque utilizamos o parentese para executala ou declarar.