// let itexto = document.getElementById('produto')

// console.log(itexto)

let span = document.getElementsByTagName('span')
// console.log(span)


// let spans = document.getElementsByClassName('texto')
// console.log(spans)

// //?? Alterar valores
// span[0].textContent = 'Javascript'
// span[1].innerHTML = 'Lucas'

// //?? Ler valores
// console.log(span[0].textContent)
// console.log(span[1].innerHTML)


// let span = document.getElementsByTagName('span')[0]

// console.log(span.innerHTML)

// span.style.textTransform = 'uppercase'




//  let inp  = document.querySelector('body div.container input')
//  let inp  = document.querySelector('input') //busca primeiro elemento pela tag
// let inp  = document.querySelectorAll('.texto') //busca todos elementos pela classe
// console.log(inp)



// let div1 = document.querySelector('#div1') //busca elemento pelo id
// console.log(div1)


// let imp = document.querySelector('input[name=produto') // pega pra mim onde o nome seja produto
// console.log(imp)



//?? Exemplo 1 evento inline

// let btn = document.querySelector('button.btn')
// btn.onclick = function(){
//     alert('Botao clicado...')
// }

//?? Exemplo 2 evento inline

let btn = document.querySelector('button.btn')

let inp = document.querySelector('input[name=produto]')

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`)
}