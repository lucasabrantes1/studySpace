//FORMA 1 COMUM

function somar1(num1, num2 ){
    return num1, num2
}
// console.log(somar1(4,6));


//FORMA 2 COMUM
let somar2 = function(n1, n2){
    return n1, n2
}
// console.log(somar2(4,6))


//FORMA 3 COMUM
let somar3 = somar1
// console.log(somar3(4,6))


//ARROW FUNCTION - É uma forma simplificada de se escrever funções; 
let somar4 = (num1, num2) =>{
    return num1, num2
}
// console.log5(somar3(4,6))

//ARROW FUNCTION - Caso a função tenha apenas um parametro de entrada e executa apenas uma linha pode-se simplifica da seguinte forma
//nessa exite um retorno implicito
let dobrar = valor => valor * 2
// console.log(dobrar(2))

 

const msg = () => console.log('evolua sue lado geek')
msg()