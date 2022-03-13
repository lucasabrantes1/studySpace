export default interface Vendavel {
    nome: string
    preco: number
    desconto: number
    precoComDesconto(): number
}