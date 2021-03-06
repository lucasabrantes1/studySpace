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


//!!Definindo Tipos Personalizados (Alias) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//Alias
type Funcionario = {

    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {

    supervisores: ['Ana','Fernando'],

    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'Fora do horário!'
        }
    }
}

let funcionario2: Funcionario = {

    supervisores: ['Hugo','Thiago'],
    
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'Fora do horário!'
        }
    }
}


console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))


//!!Definindo Tipos Personalizados (Alias) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

//??Tipos com Union Types --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Union Types
//Aqui vamos supor que vc pode aceitar essa variavel nota como number e tb como string e nesse caso
// que e interessante usar os union types.


    let nota: number | string  = 10 
    console.log(`Minha nota é ${nota}!`)
    nota = '10'
    console.log(`Minha nota é ${nota}!`)

//??Tipos com Union Types --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Checando Tipos em Runtime --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//A checagem de tipos é feita de forma automatica pelo computador na hora da compilação, mas também é possível fazer
//de forma manual.

//Checando tipos de forma manual


let valor = 30 

if(typeof valor === "number"){
    console.log("É um number!")
} else {
    console.log(typeof valor)
}


//!!Checando Tipos em Runtime --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---




//??O tipo never --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*
Suponhamos que tenhamos uma função e ela termina normalmente, como é o caso do void a cima

No tipo never é quando queremos dizer explicitamente que a função nunca vai retornar, porque ela provavelmente
vai ficar em looping, ou quando a função temrina com erro.
*/

function falha(msg: string): never{
    throw new Error(msg)

}

const produto = {
  nome: 'Sabão',
  preco: 4, //-1 lnaça o erro
  validarProduto(){
    if(!this.nome || this.nome.trim().length == 0){
        falha('Precisa ter um nome.')
    }
    if(this.preco <= 0){
        falha('Preco inválido!')    
    }
  }
}

produto.validarProduto()

//??O tipo never --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Valores Opcionais com Tipo "Null" --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*Dado uma mudança no TSconfig, o strictNullChecks permite que seja impossível retornar um valor nulo
Para isso pode-se usar o union type conforme a baixo.


o nullo tambbem e considerado um tipo mas usado sozinho não é muito util.

*/


let altura = 12
// altura = null


let alturaOpcional: null | number = 12
alturaOpcional = null


type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
}

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);


let podeSerNulo = null // é considerado any
// let podeSerNulo:  null = null // não é muito util sozinho o tipo null
// podeSerNulo = 12
console.log(podeSerNulo)
// podeSerNulo = 'abc'
console.log(podeSerNulo)

//!!Valores Opcionais com Tipo "Null" --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

