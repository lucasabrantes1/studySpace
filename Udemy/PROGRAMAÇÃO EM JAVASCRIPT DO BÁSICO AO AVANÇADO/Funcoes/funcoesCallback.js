//em funções callback basicamente pode-se se dizer que  é chamar uma variavel e/ou tipo de volta 

const cursos = [
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
]

function apresentar(curso, indice){
    // console.log(`${indice + 1} + ${curso}`)
}

// cursos.forEach(apresentar); //callback

// //lambda
// cursos.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}`)
// });

// //arrow f.
// cursos.forEach((cursos, indice) => console.log(`${indice + 1}`) - `${cursos}`)

//Calback nada mais é do que passar uam função como parametro para outra função que ira executar essa função mediante a um evento (chamar de volta ou executar novamente)

const precos = [23.55, 78.23, 899.43, 12.88, 5.23, 67.45];
let menores = []

//  for(let p in precos){
//      if(precos[p] < 50){                     //forma intuitiva noob
//          menores.push(precos[p])
//      }
//  }


// for(let i = 0; i < precos.length; i++){
//     if(precos[i] < 50){                       //forma intuitiva noob                           
//         menores.push(precos[i]);
//     }
// }


//Forma 1 simplificada dos dois for de cima.
// menores = precos.filter(function(precos){
//     return precos < 50                                      //forma simplificada avancada 
// })


//Forma 2 simplificada dos dois for de cima.
menores = precos.filter(precos => precos < 50)                  //forma simplificada avancada 

 console.log(menores)