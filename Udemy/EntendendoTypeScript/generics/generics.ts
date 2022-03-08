import { type } from "os"
//??Reaseons to use --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// function echo(objeto: any){
//     return objeto  
// }
// console.log(echo('Lucas').length)
// console.log(25).length ---> a nomeclatura do generics deixaria de forma mais explicita esse erro.
// console.log(echo({nome: 'lucas', idade: 27}))



//??Reaseons to use --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//!!Criando uma Função com Generics --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//Para utilizar um tipo genérico primeiro deve se definir o <T> o T poderia ser qualquer letra
// mas indica tipo. Logo após fazer isso definimos que o objeto é do tipo T

function echoDoDeCima<T>(objeto: T): T{
        return objeto
    }
    
    console.log(echoDoDeCima('Lucas').length)
    console.log(echoDoDeCima<number>(25))  //Note que o t foi passado como paremtro de number aqui na pratica ele troca todos os t por number.
    console.log(echoDoDeCima({nome: 'lucas', idade: 27}))
    
    
    // Resumidamente o tipo é definido no momento da execução da função.
//!!Criando uma Função com Generics --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---




//??Usando Generics com Array #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//Generics disponiveis na API

const avaliacoes: Array<number> = [10,9.3,7.3]
avaliacoes.push(8.4)  
//  avaliacoes.push('5.5') 
console.log(avaliacoes)

    
//??Usando Generics com Array #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//!!Usando Generics com Array #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



// function imprimir<T>(args: T[]){
//     args.forEach(elemento => console.log(elemento))
// }

// imprimir([1,2,3])
// imprimir<number>([1,2,3])
// imprimir<string>(['1','2','3'])
// imprimir<string>(['a','c','b'])
// imprimir<{nome: string, idade: number}>([
//     {nome: 'lucas', idade: 24},
//     {nome: 'ANA', idade: 33},
//     {nome: 'elu', idade: 3},
// ])



// type Aluno ={nome: string, idade: number}

// imprimir<Aluno>([
//     {nome: 'lucas', idade: 24},
//     {nome: 'ANA', idade: 33},
//     {nome: 'elu', idade: 3},
// ])

//!!Usando Generics com Array #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//??Tipo Função com Generics --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoDoDeCima
// console.log(chamarEcho<string>('Alguma coisa'))

//??Tipo Função com Generics --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//!!Criando Classes com Generics #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// class OperacaoBinaria {
//     constructor(public operando1: any,
//         public operando2: any) {}

//         executar(){
//             return this.operando1 + this.operando2
//         }
// }

// console.log(new OperacaoBinaria('Bom ','dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria({},{}).executar())
//!!Criando Classes com Generics #01 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//??Criando Classes com Generics #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T,
        public operando2: T) {}

        abstract executar(): R
}
class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2
    }
}


console.log(new SomaBinaria(3, 4).executar())

//??Criando Classes com Generics #02 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//!!Criando Classes com Generics #03 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// class DiferencaEntreDatas
// extends OperacaoBinaria<Data, string> {
//     getTime(data: Data): number {
//         let { dia, mes, ano } = data
//         return new Date(`${mes}/${dia}/${ano}`).getTime()
//     }

//     executar(): string {
//         const t1 = this.getTime(this.operando1)
//         const t2 = this.getTime(this.operando2)
//         const diferenca = Math.abs(t1 - t2)
//         const dia = 1000 * 60 * 60 * 24
//         return `${Math.ceil(diferenca / dia)} dia(s)`
//     }
// }

// const d1 = new Data(1, 2, 2020)
// const d2 = new Data(5, 5, 2022)
// console.log(new DiferencaEntreDatas(d1, d2).executar())


//!!Criando Classes com Generics #03 --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//??Desafio Classes com Generics --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*
Desafio classe fila
Atributo Fila array
Metodos entrar proximo imprimir
*/
// class Fila<T>{
//     private fila: Array<T>
    
//     constructor(...args: T[]){
//         this.fila = args
//     }

//     entrar(elemento: T){
//         this.fila.push(elemento)
//     }

//     proximo(): T | null {
//         if(this.fila.length >= 0 && this.fila[0]){

//             const primeiro = this.fila[0]
//             this.fila.splice(0, 1)
//             return primeiro
//         } else {
            
//             return null
//         }
//     }
    
//     imprimir(){
//         console.log(this.fila)
//     }
// }

// const fila = new Fila<string>('Gui','Pedro','Lucas','Ana','Lu','Elu')
// fila.imprimir()
// fila.entrar('Lucas')
// fila.imprimir()
// console.log(fila.proximo())
// console.log(fila.proximo())
// console.log(fila.proximo())
// console.log(fila.proximo())
// console.log(fila.proximo())


// fila.imprimir()


//??Desafio Classes com Generics --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Restrições (Constraints) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

class Fila<T extends number | string > /*Só pode ser exercido o tipo number*/{
    private fila: Array<T>
    
    constructor(...args: T[]){
        this.fila = args
    }

    entrar(elemento: T){
        this.fila.push(elemento)
    }

    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]){
            
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {
            
            return null
        }
    }
    
    imprimir(){
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui','Pedro','Lucas','Ana','Lu','Elu')
fila.imprimir()
fila.entrar('Lucas')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())


fila.imprimir()


const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()

// const outraFila = new Fila<boolean>(true, false)



//!!Restrições (Constraints) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---







//??Desafio do Módulo --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*
Desafio mapa
Array de objetos chave valor -> itens
métodos obter chave, colocar c v
limpar imprimir
*/
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = {chave: C, valor: V}

class Mapa<C, V>{
    itens: Array<Par<C, V>> = new Array<Par<C, V>>()

    obter(chave: C): Par<C, V> | null{
        const resultado = this.itens.filter(i => i.chave === chave)
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C, V>){
        const encontrado = this.obter(par.chave)
        if(encontrado){
            encontrado.valor = par.valor
        } else {
            this.itens.push(par)
        }
    }

    limpar() {
        this.itens = new Array<Par<C, V>>()
    }

    imprimir (){
        console.log(this.itens)
    }
}
 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()


//??Desafio do Módulo --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
