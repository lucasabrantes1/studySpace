//mostrar a cidade do usuário
// dificilmente vc vera uma tipagem igual a de baixo porque geralmente no ts 
// é comum criar interfaces para typar/
/*
function showCity(user: {name: string, address:{city:string} }){
    return user.address.city
}
*/
type UF = 'PE' | 'SP' | 'MG'

interface User {
    name: string,
    adress: {
        city: string
        UF: UF
    }
    sayHello: () => void
} 

function showCity(user: User){
    user.sayHello = () => console.log('lucas')
    return user.adress.UF = 'SP'
    return user.adress.city
}

let users: User[]

// users[235651515].adress.city