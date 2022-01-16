/*
Construtor -> controem o nosso objeto.
Atributos -> caracteristicas da nossa classe.
Método -> nada mais é do que uma função.

Para declarar atributos em nossa classe, nós definimos um método construtor chamado constructor e passameos os parametros.

(Em javascrip tudo é public ->( podemos acessar mesmo fora da classe))
*/

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}

class Carro {
    constructor(modelo){    //note que temos só um parametro de atributo mas na vdd temos 2 onde um é fixo
        this.marca = 'Honda'
        this.modelo = modelo
    }
}
