//document é todo nosso elemento htlm
//query selector é uma função js na qual passamos o valor de link e essa api js vai recuperar o valor, no caso ele vai buscar no nosso código html uma tag com a class link
// para classes . para id # para tag o nomer da tag

let a = document.querySelector('.link')
// console.log(a) --> exibe o que está a classe tag a
// console.log(a.innerText) exibe o texto da tag com a classe a
// console.log(a.parentNode.parentNode) // acesa o elemento pai do ancora e ao pai do pai
// console.log(a.parentNode.parentNode.parentNode) // document
// console.log(a.parentNode.parentNode.parentNode.parentNode )//null

// console.log(a.parentNode.parentNode.childNodes)

// console.log(a.parentNode.parentNode.firstChild) //head

// console.log(a.firstChild)

// console.log(a.parentNode.parentNode.lastChild)//body

// console.log(a.parentNode.parentNode.firstChild.nextSibling) //proximo irmão 

