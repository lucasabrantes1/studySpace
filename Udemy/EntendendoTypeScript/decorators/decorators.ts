


//!!Criando Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// /*O decorator é uma função, e essa função*/
// @logarClasseSe(false)
// // @logarClasse
// class Eletrodomestico{
//     constructor(){
//         console.log('Novo...')
//     }
// }


// function logarClasse(construtor: Function){
//     console.log(construtor)
// }




//??Decorator Factory --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// function logarCLaseSe(valor: boolean){
    //     return valor ? logarClasse : null
    // }
    
    
//??Decorator Factory --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//!!Alterando Construtor com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// @logarClasseSe(true)
// @logarObjeto
// class Eletrodomestico {
//     constructor(){
//         console.log('Novo...')
//     }
// }


// type Construtor = {new(...args: any[]): {}}

// function logarObjeto(construtor: Construtor){
//     console.log('Carregado...')
//     return class extends construtor {
//         constructor(...args: any[]) {
//             console.log('Antes...')
//             super(...args)
//             console.log('Depois...')
//         }
//     }
// }

// new Eletrodomestico()

//!!Alterando Construtor com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//??Adicionando Método com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// interface Eletrodomestico {
//     imprimir?(): void
// }
// @imprimivel
// class Eletrodomestico {
//     constructor(){
//         console.log('Novo...')
//     }
// }

// function imprimivel(constructor: Function){
//     constructor.prototype.imprimir = function(){
//         console.log(this)
//     }
// }

// // (<any>new Eletrodomestico()).imprimir()
// // (<any>new Eletrodomestico()).imprimir()
// const eletro = new Eletrodomestico()
// eletro.imprimir && eletro.imprimir()

//??Adicionando Método com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//!!Decorator de Método --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

class ContaCorrente {
    @naoNegativo
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number){
        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.570)
cc.sacar(5000)
console.log(cc.getSaldo())


// cc.getSaldo = function(){
//     return this['saldo'] + 7000
// }

console.log(cc.getSaldo)


// Object.freeze
function congelar(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor){
    console.log(alvo)
    console.log(nomeMetodo)
    descritor.writable = false    
    }

//!!Decorator de Método --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


//??Decorator de Atributoe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any): void {
            if(valor < 0 ){
                throw new Error('Saldo Inválido')
            } else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}



//??Decorator de Atributoe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//!!Decorator de Parâmetro --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
    console.log(`Alvo: ${alvo}`)
    console.log(`Método: ${nomeMetodo}`)
    console.log(`Indice Param: ${indiceParam}`)
    
}


//!!Decorator de Parâmetro --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---