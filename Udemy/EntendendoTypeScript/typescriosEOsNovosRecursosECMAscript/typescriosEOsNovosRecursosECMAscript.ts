//??Let e Const #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
let seraQuePode = '?' //hoisting (inçadas)
console.log(seraQuePode)


let estaFrio = true
if(estaFrio){
   let acao = 'Colocar o casado!' 
   console.log(acao)
}

// const cpf: string = '411.888.55.8'
// cpf = '44.44.4.4.4.'
// console.log(cpf)

//??Let e Const #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Let e Const #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/* Tanto let quanto const , tem escopo de bloco, quando em um bloco estara visivel somente la*/

var segredo = 'externo'
function revelar(){
   const segredo = 'interno'
   console.log(segredo)
}
revelar()
console.log(segredo)

{
   const def = 'def'
   console.log(def)
}

for(let i=0; i<0; i++){
   console.log(i)
}
// console.log(i) //n na pra acessar.

//!!Let e Const #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//??Arrow Function #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*this = referencia de um objeto(contexto atual)*/

//Maneira tradicional de declarar uma função
const somar = function(n1: number, n2:number): number{
   return n1 + n2
}
console.log(somar(2,2))

//Função anonima
// function(n1: number, n2:number): number{
   //    return n1 + n2
   // }
   // console.log(somar(2,2))
   
   
   //Função com nome 
   function somarr(n1: number, n2:number): number{
      return n1 + n2
   }
   console.log(somarr(2,2))
   
   
   
   //Função arrow sem chaves  é sempre anonima e não precisa de return
   // => indica retorno
   const subtrair = (n1: number, n2:number) => n1 - n2
   console.log(subtrair(2,3))
   
   
   //Função arrow com chaves precisa do return
   const subtrairVersao2 = (n1: number, n2:number): number => {
      return  n1 - n2
   }
   console.log(subtrairVersao2(2,3))
   
//??Arrow Function #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Arrow Function #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//Funcao arrow sem parametro
// const saudacao = () => console.log("Olá")
// saudacao()

// const falarCom = (pessoa: string) => console.log('Oi ' + pessoa)
// falarCom('Lucas')

// //This pode variar 
// //Bind significa que o que eu passar como parametro para ele sera usado dentro da fun;'ao como o this

// function normalComThis(){
   //    console.log(this)
   
   // }
   
   // const normalComThisEspecial = normalComThis.bind({nome: 'Ana'})
   
   // normalComThis()
   // normalComThisEspecial()
   
   
   
   // //Arow function com this
   // //this????
   // console.log(this)
   // //PAra saber quem sera o this dentro da função arrow, basta ver quem é o this na linha anterior em que a função definida.
   // const arrowComThis = () => console.log(this)
   // arrowComThis()
   
   
//!!Arrow Function #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

   

//??Parâmetro Padrão --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
   // function contagemRegressiva(inicio: number = 5, fim: number = 3 - 5): void{
   //    console.log(inicio)
   //    while( inicio >= 0) {
   //       inicio--
   //       console.log(inicio)
   //    }
   //    console.log("Fim")
   // }

   // contagemRegressiva()
   // contagemRegressiva(3)
//??Parâmetro Padrão --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//!!Operador Spread... & Rest #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))



const turmaA: string[] = ['Joao','Maria','Lucas']
const turmaB: string[] = ['Larissa','Lexturos','Luthero',...turmaA.slice(1)]
console.log(turmaB)


//!!Operador Spread & Rest #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---




//??Operador  Rest #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

function retornaArray(a:number,...args: number[]): number[]{
   console.log(a)
   return args
}
const numeros = retornaArray(1,2,7,8,9,10)
console.log(numeros)
// console.log(retornaArray(...numbers)) --> separa e junta

//??Operador  Rest #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Operador Spread & Rest #03 no contexto de tupla--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void{
   console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam1(...tupla)





function tuplaParam2(...params: [number, string, boolean]){
   console.log(Array.isArray(params))
   console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

//!!Operador Spread & Rest #03 no contexto de tupla --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//??Operador Destructuring (Array) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*Quer dizer pegar dados de uma estrutura e expor esses dados de uma forma mais simples
e mais rapida sem ter que pegar cada um dos dados e atribuir para cada variavel.*/
const caracteristica = ['Motor zetec 1.8', 2020]
// const motor = caracteristica[0]
// const anos = caracteristica[1]



//Aplicando destructuring
const [motor, ano] = caracteristica
console.log(motor)
console.log(ano)


const [w, z] = [2, 3]
//??Operador Destructuring (Array) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Operador Destructuring (Objeto) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/* */
const item = {
   nome: 'SSD 480GB',
   preco: 200,
   caracteristicas: {
      y: 'Importado'
   }
}

// const nomeItem = item.preco


//destructiring

const {nome: n, preco: p, caracteristicas: {y} } = item
console.log(n)
console.log(p)
console.log(y)



//!!Operador Destructuring (Objeto) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//??Template String --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//sem template string
const usuarioId: string = 'suportecoder'
const notificacoes: string = '19'
// const boasVindas = ' Boas vindas ' + usuarioId + ' Notificações ' + notificacoes
// console.log(boasVindas)


//Com template string
const boasVindas =`

Boas vindas ${usuarioId},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes},  
`
console.log(boasVindas)

//??Template String --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Promises --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/* Uma promessa algo que vai chegar no futuro, asycronismo(Async await) */

// function esperar3s(callback: (dado: string) => void){
//    setTimeout(() => {
//       callback('3s depois...')
//    }, 3000)
// }

// esperar3s(function(resultado: string){
//    console.log(resultado)
// })


// function esperar3sPromise(){
//    return new Promise((resolve: any) =>{
//       setTimeout(() => {
//          resolve('3s depois promise...')
//       }, 3000)
//    })
// }

// esperar3sPromise().then(dado => console.log(dado))

fetch('https://swapi.dev/api/people/1')
.then(res => res.json())
.then(personagem => personagem.films)
.then(films => fetch(films[1]))
.then(resFilm => resFilm.json())
.then(filme => console.log(filme.title))



//!!Promises --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---