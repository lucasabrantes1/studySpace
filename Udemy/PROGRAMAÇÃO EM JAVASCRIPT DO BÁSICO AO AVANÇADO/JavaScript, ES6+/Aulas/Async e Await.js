//Com o async await é possível retomar os dados de somente quando ja estiverem sido processados, similar a promise

//Promise
const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10) //0 - 9
    setInterval(() => {
      if(valor % 2 == 0 ){
          resolve(`O valor ${valor} é par...`)
      } else{
          reject(`O valor ${valor} é ímpar...`)
      } 
    }, 2000)
})

async function executarPromise(){
    try{
        const response = await novaPromise();
        console.log(response)
    }catch(erro){
        console.log(erro)
    }
    console.log('Esperei o await')
}

executarPromise()