// var isActive = false
// var message = ''

// //condicao
// if(isActive){ //se
//     message = 'Está ativo'
// } else {  //se não
//     message = 'Não está ativo'
// }
// console.log(message)
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
var trafficLight = 'verde'
var message = ''

// if (trafficLight == 'verde') { //se
//     message = 'Pode passar'

// } else if (trafficLight == 'vermelho') { //se não, se
//     message = 'Stop'   
// } else if (trafficLight == 'amarelo') { //se não, se
//     message = 'Atençaõ'
// }else {
//     message = ' Stop'
// }
// console.log(message)


switch(trafficLight){
   case 'verde':
   message = 'Can pass'
   break;

   case 'vermelho':
   message = 'Stop' 
   break;
   
   case 'amarelo':
   message = 'Pay Attention'
   break;
   
   default:
   message = 'invalid value'
   break;
}

console.log(message)