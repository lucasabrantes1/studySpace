/*O js é uma linguagem de tipos dinamicos, onde vocÊ cria uma variavel pode-se obter o tipo que se quiser.*/



//String
let nome: string = 'Lucas'
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



//Tupla = array de tipos de uma quantidade pre-definida de tipos pro exemplo um array de 3 posições sendo 1string, 2number, 3number
let endereco: [string, number, string] = ["Av principal",99,"a"]
console.log(endereco)
endereco = ["Rua importante", 1260, "a"]
console.log(endereco)



//Enums --> são enúmerações como no java, onde se define valores pré-definidos, como seg,ter,quar,quin,sex,sab e dom
enum Cor {
    Cinza, //0
    Verde = 100, //1 --> aqui alteramos a ordem para que quando fosse imprimido o valor, ele retornase 100, mas note que se não inferirmos o valor de 2 a baixo incrementa apartir do ultimo valor.
    Azul  = 2,//2  --> informado de forma explicita para que não fosse gerado um incremento do número anterior
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Verde, Cor.Vermelho,('Dois valores com 100 não geram conflitos'))



//Any --> torna as variaveis como é no JS via de regra é bom evitar, é util para migrar pra de js para ts
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)



//?Funções --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

//Tipando funções com parametros que devem retornar um tipo determinado..
function retornaMeuNome(): string{
    return nome
}
console.log(retornaMeuNome())



//Tipando funções que devem retornar um valor vazio ou que não retornam nada.
function digaOi(): void{  //--> tipo void não retorna nada.
    console.log('Oi')
    // return minhaIdade // --> Conflito no tipo.
}



//Tipando funções com parametros.
function multiplicar(numA: number, numB: number): number{
    return numA * numB
}

console.log(multiplicar(2, 2))

//?Funções --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---




//!!Usando Tipos em Funções (Parâmetros e Retorno) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

//Tipo Função
let calculo: (oNomeDaVariavelNaoImportam: number,bastaOTipoBaterEORetornoTambem: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5,5))

//!! Usando Tipos em Funções (Parâmetros e Retorno) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---




//?Objetos e Tipos --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//objetos

let usuario: { nome: string, idade: number } = {
    nome: 'Lucas',
    idade: 27
}

console.log(usuario)

// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    nome: 'Mari',
    idade: 31
}

console.log(usuario)


//?Objetos e Tipos --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
