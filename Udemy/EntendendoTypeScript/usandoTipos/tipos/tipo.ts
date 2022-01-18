/*O js é uma linguagem de tipos dinamicos, onde vocÊ cria uma variavel pode-se obter o tipo que se quiser.*/

//String
let nome: string = 'João'
console.log(nome)
// nome = 28 --> não é possível inferir valor pois ambos são de diferentes tipos.



//numbers
let idade: number = 27
// idade = 'ana'
idade = 27.5 //--> não faz destinção de pontos flutuantes e --> não é possível inferir valor pois ambos são de diferentes tipos.
console.log(idade)


//boolean 
let possuiHobbies: boolean = false
// possuiHobbies = 1 --> não é possível inferir valor pois ambos são de diferentes tipos.
console.log(possuiHobbies)


//tipos explícitos
//let minhaIdade --> tipo dinâmico
let minhaIdade: number //tipo dinâmico
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade =  27
//Se não for definido uma variavel, nem o tipo, e nem inicializa a variavel significa que automaticamente a variavel
//será tratada como tipo any.



//Tipo array
let hobbies: any[] = ["Cozinhar","Praticar esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100]
console.log(hobbies)