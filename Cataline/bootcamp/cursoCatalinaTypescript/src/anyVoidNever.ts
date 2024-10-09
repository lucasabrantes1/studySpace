//any, void, never

//any qualquer tipo não é legal pq vai tirar o propósito do typescript
let stock: any = 89 
stock = null

//void para tipar o retorno de uma função que não retorna nada
function showInformation(name: string = 'Lucas'): void{
    console.log(name)
}

//never é utilizado para tipar  aquelas funções que tem o looping infinito ou exceções  
function error(): never{
    throw new Error('error')
}