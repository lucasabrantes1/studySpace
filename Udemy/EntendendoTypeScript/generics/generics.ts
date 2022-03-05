
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