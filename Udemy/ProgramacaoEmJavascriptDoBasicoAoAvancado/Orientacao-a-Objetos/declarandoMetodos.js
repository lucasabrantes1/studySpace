/*Métodos são comportamentos dos objetos que estamos modelando em nossas classes, método nada mais é do que uma função em js para declarar um método nós
definimos o seu nome, podendo ou não ter parametro de entrada e não é utilziado a palavra function  pro exemplo a baixo o constructor 


Getters and setter
 Em POO existe um conceito chamado encapsulamento onde a gente enclasura(encapsula) atributos ou métodos de uma classe para que esse não sejam acesssados fora deles.
 (public, private e protected)

 Getter = devolvem o valor
 Setter = colocam valores

 Ao invés de acessarmos os métodos diretamente acessamos através dos getters and setters

    1. Para criar os getters and setters devemos colocar um underline(_) nos atributos

    2. Para cada atributo vamos criar um get com o mesmo nome do atributo

    3. Criar um set para cada atributo no set ele recebe parametro e nem precisa do return.
*/

class Pessoa {
    constructor(nome, sobrenome) {
      this._nome = nome
      this._sobrenome = sobrenome
    }

    get nome(){
        return this._nome
    }

    set nome(nome){
         this._nome = nome
     }

     get sobrenome(){
         return this.sobrenome
     }

     set sobrenome(sobrenome){
         this.sobrenome = sobrenome
     }

    /*Método*/falar(msg){
        console.log(`${this.nome} está falando ${msg}`)
    }

    /*Método*/comer(){
        console.log(`${this.nome} está falando comendo...`)  //this diz respeito ao objeto que esta executando
    }

    /*Método*/beber(){
        console.log(`${this.nome} ${this.sobrenome} está falando bebendo...`)
    }
  }
  
  class Carro {
      constructor(modelo){    
          this._marca = 'Honda'
          this._modelo = modelo
      }

    get marca(){
        return this._marca
    }

    get modelo(){
         return this._modelo
    }

    set modelo(modelo){
         this._modelo = modelo
    }

      /*Método*/inprimir(){
        console.log(`${this.marca}${this.marca}`)
    }
  }
  