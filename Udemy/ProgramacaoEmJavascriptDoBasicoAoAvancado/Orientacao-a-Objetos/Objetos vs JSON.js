
//?? Objeto literal

const curso = {
    nome: 'Programação em JavaScript',
    hora: 27,
    preco() {
        return this.hora * 0.67
    }
}
// console.log(curso)
// console.log(curso.preco())
// console.log(typeof(curso))


/*
?? JSON - Javascript Object Notatio
?? É um formato de texto, utilizado na comunicação de textos, muito utlizado em APIs

(((SOMENTE OS DADOS SERÃO PASSADOS PARA JSON FUNCOES N)))
*/

//?? Convertendo o Objeto Javascript Para JSON
const json = JSON.stringify(curso)
console.log(json) //JSON
console.log(typeof(json)) //JSON


//?? Convertendo de JSON Para Javascript
const obj = JSON.parse(json)
console.log(obj)
console.log(typeof(obj))


// const json_errado = "{ 'nome': 'Programação em JavaScript', 'preco': '27.29' }"

const json_corrigido = '{ "nome": "Programação em JavaScript", "preco": "27.299" }'

console.log(json_corrigido)
console.log(typeof(json_corrigido))

const novo_obj = JSON.parse(json_corrigido)
console.log(novo_obj)
console.log(typeof(novo_obj))