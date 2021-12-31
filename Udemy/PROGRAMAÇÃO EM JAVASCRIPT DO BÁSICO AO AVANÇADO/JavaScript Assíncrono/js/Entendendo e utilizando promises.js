let btn = document.querySelector('#btn')
let div = document.querySelector('#btn')

let promise = function(){
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name=github_user]').value;
        let ajax = new XMLHttpRequest()
        ajax.open('GET', `https://api.github.com/users/${github_use}`);
        ajax.send(null)

        ajax.onreadystatechange = function(){
            if(ajax.status === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText))
                }else{
                    reject('Não foi encontrado nehum usúario com este nome.')
                }
            }
        }
    })
}

btn.onclick = function(){
    //Limpa a div
    div.innerHTML = ''

    //Cria span
    let spanNome = document.createElement('span')

    //Cria  a variável nome
    let txtNome = ''

    //Executa a promise
    promise()
        .then(function(response){
            //Se o usúario tem nome
          if(response['name'] !== null){
            txtNome = document.createTextNode(response['name'])

            let img = document.createElement('img')
            img.setAttribute('src', response['avatar_url'])
            img.setAttribute('alt', response['name'])
            img.setAttribute('width','45px')
            img.setAttribute('height','45px')
 
            div.appendChild(img)
          } else{
              txtNome = document.createTextNode('O usúario encontrado não possui nome.')
          }
           //Adiciona o texto ao span e o span a div
           spanNome.appendChild(txtNome)
           div.appendChild(spanNome)
        }).catch(function(error){
            txtNome = document.createTextNode(error)
            //Adiciona o texto ao span e o span a div
           spanNome.appendChild(txtNome)
           div.appendChild(spanNome)
        })
}