import express, { request, response } from 'express'
import { v4 as uuid } from 'uuid'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))

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



/*-------------------------------Request Body --------------------------------
Digamos que queiramso criar um novo usuario, no enviaremos os usuarios
atraves do body 
quando queremos enviar varias requisições para a nossa api mas sem  ser através da
url mais comun quando estamos criano uma nova entidade ou atualizando
um  recurso
------------------------------------------------------------------------------- */

interface User {
    id : string 
    name: string
    email: string
}

const users: User[] = []

app.get('/users', (request, response) => {
   return response.json(users)
})

app.post('/users' , (request, response) => {
    // receber os dados do novo usuário nome etc
    const{name, email} = request.body
    //criar um novo usuario
    const user = { id: uuid(), name, email }
    //registrar esse usuário
    users.push(user)
    // retornar os dados do usuário criado
    return response.json(user)
})

app.put('/users/:id' , (request, response) => {
    //receber os dados do usuário
    const { id } = request.params
    const { name, email } = request.body
    //localizar o usuario na base de dados
    const userIndex = users.findIndex((user) => user.id === id) //-1
    //se o suário não existir, retornar um erro
    if(userIndex < 0){
        return response.status(404).json({error: 'User not found.'})
    }
    //atualiza o usuário na base de dados
    const user = {id, name, email}
    users[userIndex] = user
    //retorna os dados do usuário atualizado   
    return response.json(user)
})

app.delete('/users/:id' , (request, response) => {
  //receber id do usuário
  const { id } = request.params
  /*localizar o usuário na base de dados   
  se o usuário não existir, retornar um erro*/
  const userIndex = users.findIndex((user) => user.id === id) //-1
  if(userIndex < 0){
      return response.status(404).json({error: 'User not found.'})
  }
  //se ele existir excluir usuário da base de dados
  users.splice(userIndex, 1)
  //retorna status de sucesso
  return response.status(204).send();
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