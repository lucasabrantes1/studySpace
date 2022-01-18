/*O js é uma linguagem de tipos dinamicos, onde vocÊ cria uma variavel pode-se obter o tipo que se quiser.*/

//String
let nome = 'João'
console.log(nome)
// nome = 28 --> não é possível inferir valor pois ambos são de diferentes tipos.



//numbers
let idade = 27
// idade = 'ana'
idade = 27.5 //--> não faz destinção de pontos flutuantes e --> não é possível inferir valor pois ambos são de diferentes tipos.
console.log(idade)


//boolean 
let possuiHobbies = false
// possuiHobbies = 1 --> não é possível inferir valor pois ambos são de diferentes tipos.
console.log(possuiHobbies)
