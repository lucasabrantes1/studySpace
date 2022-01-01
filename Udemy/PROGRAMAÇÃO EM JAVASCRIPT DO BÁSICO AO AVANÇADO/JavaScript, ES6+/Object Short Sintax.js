//Básicamente não é necessário atribuir a repetição de nomes de varíaveis a um objeto se ja houver uma varíavel declarada em um objeto.

const nome = 'Programação em JavaScript'
const preco = 'R$ 27,99'

const curso = {
    nome,
    preco,
    instrutor: 'Geek University'
}

console.log(curso)