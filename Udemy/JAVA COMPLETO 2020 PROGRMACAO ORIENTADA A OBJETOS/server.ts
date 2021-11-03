import express, { request, response } from 'express'
const app = express()
app.use(express.json())
//métodos http - get - post - put - delete
//http://localhost:3333/users
// é retornado a porta do  app.listen //11 - linha

//Tipos de parâmetros
//--------------------


/*--------------------------------Query Params -------------------------------- 
Utilizado para fazer filtro de informações durante uma requisição, por exemplo
paginações, filtros e coisas do genero
/http://localhost:3333/users?pePage=3&page=1 
no exemplo acima está indicando, usuario ? por pagina que será 3 & na página 1



// app.get('/users', (request, response) => {
//     const {perPage, currentPage} = request.query
//     console.log(perPage)                                             //Query Params
//     console.log(currentPage)
//     return response.json({})
//  })


------------------------------------------------------------------------------- */






/*--------------------------------Route Params --------------------------------
Geralmente são utilizados para, identificar um recurso em uma rota 
Resumidadmente utilizado pa para quando queremos especificar 

é quando queremos especificar e identificar um recurso
na rotas de update e delete
agora se tivermos uma rota get e queremos especificar o id

------------------------------------------------------------------------------- */



/*--------------------------------Request Body --------------------------------
Digamos que queiramso criar um novo usuario, no enviaremos os usuarios
atraves do body 
quando queremos enviar varias requisições para a nossa api mas sem  ser através da
url mais comun quando estamos criano uma nova entidade ou atualizando
um  recurso
------------------------------------------------------------------------------- */





app.get('/users', (request, response) => {
   return response.json(['usuário 1', 'usuário 2'])
})

app.post('/users' , (request, response) => {
    const body = request.body                                    //Request Body 
    console.log(body)                                            // colocar os itens pelo insomnia json
    return response.json({ message: 'Criando usuário' })
})

app.put('/users/:id' , (request, response) => {
    const {id} = request.params                        //Route Params
    console.log(id)
    return response.json({ message: 'Atualizando usuário' })
})

app.delete('/users' , (request, response) => {
    return response.json({ message: 'Excluindo usuário' })
})




app.listen('3333', () => {
    console.log('Back-end Started!')
})

















// app.get('/users', (request, response) => {
//     const {perPage, currentPage} = request.query
//     console.log(perPage)                                             //Query Params
//     console.log(currentPage)
//     return response.json({})
//  })