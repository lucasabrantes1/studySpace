//!!Criando Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*O decorator é uma função, e essa função*/

@logarClasse
class Eletrodomestico{
    constructor(){
        console.log('Novo...')
    }
}

function logarClasse(construtor: Function){
    console.log(construtor)
}

new Eletrodomestico()

//!!Criando Decorator de Classe --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---




//??Desafio do Módulo --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---