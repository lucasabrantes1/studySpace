/*
O try-catch tem como função tratar os erros
*/

//Tratamos erros com try/catch
// try{
//     console.log(nome)
// }catch(e){ // e pode ser usado para chamar variaveis
//     console.log('Não foi possível imprimir nome.')
//     console.log(e.nome)
//     console.log(e.message)
// }

//Lançando erros
function dividir(num1, num2){
    if(num1 === 0 || num2 === 0){
        throw('os valores devem ser possitivos')
    }else{
        return num1 / num2
    }
}


try {
    let ret = dividir(4,2)
    console.log(ret)
} catch (e) {
    console.log('Não foi possível dividir')
}finally{
    console.log('Vamos continuar...')   
}


