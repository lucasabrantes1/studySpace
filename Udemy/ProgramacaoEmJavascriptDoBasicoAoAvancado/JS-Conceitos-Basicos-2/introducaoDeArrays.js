/*Arrays são container de dados, ou seja estruturas que nos permitem guardar varios dados, em js não existe um tipo especifico de array
 em js arrays são objetos indexidados onde um array começa sempre pelo 0
 
 
 Array contendo 5 elementos -> n = 5
 indices -> posição do elemento no array
[0][1][2][3][4]

valores em um array
[12]['geek'][true][25][36][48][52]
 

Detalhes sobre arrays
- Possuem tamanho infinito* (depende da memoria do pc)
- Podemos colocar qualquer tipo de dado(recomenda-se manter um tipo de dado)
 */


// //Formaas de criar um array

// //Forma 1
// var alunos = new Array('Lucas','Maria','Joao','Sofia')
// console.log(alunos)

// //Forma 2(recomendada)
// var notas = [1, 2, 3, 4]
// console.log(notas)

// //Array vazio
// var dados = []


// //Fazendo acesso ao valor de um indice
// console.log(notas[2])


// //Alterando o valor a partir do indice
// notas[2] = 12
// console.log(notas)

// //Atenção ao acesar um valor com um índice que não existe
// notas[9] = 12 //Não existe
// console.log(notas)

// if(notas[5] ==undefined){
//     notas[5] = 54
// }
// console.log(notas[5] == undefined) //true

// //Iserindo elemenos no final do array 
// var nomes = ['Lucas','Maria','Julia'];
// console.log(nomes);

// nomes.push('Vanessa')
// console.log(nomes);

// //Tamanho do array
// console.log(nomes.length)


// //Ordernar os dados de um array
// var alunos = ['Vera', 'Lucia','Pedro','Ana','Beatriz','Bruno','Gilberto']
// alunos.sort()
// console.log(alunos)

// //sort - considera todos os valores como string


// //para ordernar numeros de um array]
// var precos=[212.22, 331.32,435.44,321.3,33.3,345]
// precos.sort(function(a,b) {return a - b})
// console.log(precos)


// var idade=[1,88,5,12,5,4,8,56,4]
// idade.sort(function(a,b) {return a - b})
// console.log(idade)

// //Deletando dados de um array
// delete idade[3]
// console.log(idade)

// // idade.splice(3, 1)//apartir do indice 3 delete 1 elemento
// // console.log(idade)


// // idade.splice(3, 1, 56, 89)//apartir do indice 3 n'ao delete nehum, mas adicione 56 e 89
// // console.log(idade)

// idade.splice(3, 1, 23) //A partir do índice 3, deleta 1, e adiciona 23
// console.log(idade)
// //idade[3] = 23

// //interar em um array
// for(var i = 0; i< idade.length; i++){
//     // console.log(idade[i])
// }

// //Removendo elementos da ultima posição do array
// idade.pop(); //remove e retorna o ultimo elemento de um array
// console.log(idade)


// var ret = idade.pop()
// console.log(ret)
// console.log(idade)


// //Remove o primeiro elemento de um array
// idade.shift() //remove e retorna o primeiro elemento de um array
// console.log(idade)

// var ret = idade.shift()
// console.log(ret)
// console.log(idade)


// //iserindo() um elemto ao começo do array
// idade.unshift(99);
// console.log(idade)

// console.log('\n\n')
// //retorna um novo array a partir do indice informado
// var novo = idade.slice(3)
// console.log(novo)

// var novo2= idade.slice(1, 2)//apartir do indice 1 pegue at[e o indice 2 sem inclui-lo]

var pares =     [2, 4, 6, 8, 10]
var impares =   [1, 3, 5, 7, 9]

var rest2 = pares.concat(impares) //concatena os dois arrays
console.log(rest2)

rest2 = impares.concat(pares)
console.log(rest2)

rest2.sort(function(a, b){return a -b})
console.log(rest2)


/*Array de arrays ou(matrizes ou bidimensionais por exemplo 4 x 4 significa que iremos ter 4 linhas e 4 colunas onde cada elemento [e uma coluna]

    [

        [  1,    2,   3,   4],  //linha 1
        [  5,    6,   7,   8],  //linha 2
        [  9,   10,  11,  12],  //linha 3
        [ 13,  14,  15,   16],  //linha 4

    ]
*/
var tabuleiro = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]  
console.log(tabuleiro[0][0]) // linha 0 coluna 0 -> 1
console.log(tabuleiro[2][2]) // linha 2 coluna 2 -> 11