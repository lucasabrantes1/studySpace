/*Reduce: também é uma estrutura de repetição, geralmente utilizado em conjunto com o map ou filter, a sua função é reduzir, coleções de valores em um unico valor. */

var precos = [4.66, 3.78, 9.78, 1.34, 5.32]

var soma =0
for(var i = 0; i < precos.length; i++){
    soma = soma + precos[i] 
}
// console.log(soma)

var soma = 0
precos.forEach(function(valor){
   soma += valor
})
// console.log(soma)


function somar(anterior, atual){
    return anterior + atual
}

var ret = precos.reduce(somar)
// console.log(ret)

/*Como funciona o reduce;

        [4.66, 3.78, 9.78, 1.34, 5.32]

        Primeira execução; 
            - Pega os dois primeiros valores (indíce 0 e indice 1), soma e retorna este valor;
        Nas demais execuções:    
            - Pega o retorno da execução anterio e o próximo valor (indíce 2....)

           1 -> 4.66  + 3.78 = 8.44
           2 -> 8.44  + 9.78 = 18.22
           3 -> 18.22 + 1.34 = 19.56
           4 -> 19.56 + 5.32 = 24.88

*/


// Exemplo map/reduce nesse exemplo ira somar cada valor com 5 e no final com o reduce ira fazer a somatoria de todos os valores apos ser aplicado a taxa de 5 para cada um 
// dos respectivos itens.


function adicionarTaxa(valor){
    return valor + 5
}

var ret = precos.map(adicionarTaxa).reduce(somar)
// console.log(ret)



//Exemplo filter/map/reduce
function precoMaiorQue4(valor){
    return valor > 4
}

ret = precos.filter(precoMaiorQue4).map(adicionarTaxa).reduce(somar)
console.log(ret)



