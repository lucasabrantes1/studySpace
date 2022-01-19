//Desafio 
/*
Criar um objeto funcionário com :
    - Array de strings com os nomes dos supervisores
    - Funções de bater ponto que recebe a hora (número) retorna
      uma String
        
      -> Ponto normal (<= 8)
      -> Fora do horário ( >8)
*/

//- primeira try o valor manualmente
// let supervisores: [string,string,string,string] = ["Thiago","Hugo","Cecilia","Rafael"]
// console.log(endereco)
// endereco = ["Rua importante", 1260, "a"]
// console.log(endereco)



// function baterPonto(horaDoPonto:number, retorno:string){  
//     let dateTime = new Date()
//     var hour: any = dateTime.getHours() 

//     if(hour <= 8){
//         return retorno = `normal`
//     }else{
//         return retorno = `Fora do horario`
//     }
   
// }

// baterPonto(25,"a")


//- peassando o valor manualmente
// let funcionario: { nome: string, idade: number } = {
//     nome: 'Lucas',
//     idade: 27
// }


// let funcionario: {
//     supervisores: string[],
//     baterPonto: (horas: number) => string
// } = {
//     supervisores: ['Ana','Fernando'],

//     baterPonto(horario: number): string {


        
//         if(horario <= 8){
//             return 'Ponto normal'
//         }else{
//             return 'Fora do horário!'
//         }
//     }
// }

// let dateTime = new Date()
// let hour: any = dateTime.getHours() 
// console.log(funcionario.supervisores)
// console.log(funcionario.baterPonto(2))
// console.log(funcionario.baterPonto(hour))


//- pegando horario atual
let funcionario: {
    supervisores: string[],
    baterPonto: () => string
} = {
    supervisores: ['Ana','Fernando'],

    baterPonto(): string {
        let dateTime = new Date()
        let hour: any = dateTime.getHours()
        
        
        if(hour <= 8){
            return 'Ponto normal'
        }else{
            return 'Fora do horário!'
        }
    }
}

 
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto())
