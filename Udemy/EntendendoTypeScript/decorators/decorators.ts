


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
@logarObjeto
class Eletrodomestico {
    constructor(){
        console.log('Novo...')
    }
}


type Construtor = {new(...args: any[]): {}}

function logarObjeto(construtor: Construtor){
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

new Eletrodomestico()

//!!Alterando Construtor com Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---