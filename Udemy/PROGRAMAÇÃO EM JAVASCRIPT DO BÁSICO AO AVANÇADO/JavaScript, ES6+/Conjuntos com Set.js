/*
 - Conjuntos não aceitam repetição de valores
 - Conjuntos não são indexados 
*/

//Desclarando um conjunto
let cursos = new Set()

//Adicionando valores
cursos.add('Programação para leigos')
cursos.add('Algoritmos e lógica de programação')

//Adicionar valores concatenados
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python')

cursos.add('Banco de Dados')
cursos.add('Programação Web com Django Framework').add('Programação em Java').add('Programação em Python')

// console.log(cursos)


//Acessando o tamanho do conjunto
// console.log(cursos.size)

//Verifica se existe armazenado no conjunto dado pelo nome da variavel cujo o qual foi instanciado o set.
// console.log(cursos.has('Banco de dado'))



//Deleta elementos de um conjunto sendo false se não existir logo ele não ira deletera e retornando true se existir o elemento dentro do conjunto.
cursos.delete('Banco de Dados')
// console.log(cursos)



let frutas = ['Manga','Uva','Jaca', 'Uva']
let frutas_unicas = new Set(frutas)
console.log(frutas_unicas)