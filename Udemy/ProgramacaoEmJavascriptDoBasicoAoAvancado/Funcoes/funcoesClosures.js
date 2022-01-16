//Para falar de closures precisamos conceitos lexicos ou seja a forma de escrita da linguagem javascript conforme a baixo

// let xuxa = 'global' //pode ser acessada globalmente

// function imprimir(){
//     console.log(xuxa)
// }

// function outra(){
//     let xuxa = 'local' //pode ser acessada localmente no bloco/contexto
//     imprimir()
//     console.log(xuxa) //local - variaveis locais tem precedencia sobre variaveis globais
// }

// outra() //


//Closure - É o escopo que criado quando uma função é declarado dado que esse escopo permite a função acessar e manipular variaveis que foram declaradas externas a função.
//escopo da função === closure


//Novo exemplo

let variavel = 'global'

function externa(){
    let variavel = 'local'

    function interna (){
        return variavel //local
    }

    return interna
}

let executa = externa()
console.log(executa()) //local

//Closure [e o contexto logico de uma função]