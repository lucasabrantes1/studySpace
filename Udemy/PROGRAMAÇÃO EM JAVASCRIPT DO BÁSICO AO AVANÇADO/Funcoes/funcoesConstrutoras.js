//criando uma função construtora

function Pessoa(n, s, raca='Humano'){
    //atributo privados so conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    //método privado so conseguimos fazer uso dentro da função construtora
    let imprimir_dado = function(){
       console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Sexo: ${sexo}, Altura: ${altura}, Raça: ${raca}`) 
    }

    //método publico conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dado();
    }

    this.getIdade = function(){
        return idade
    }
}

//Instanciando um objeto
const angelina = new Pessoa("Angelina", "Feminino")

console.log(angelina)

console.log(angelina.peso) //privado
console.log(angelina.raca)    //publico  

angelina.fazer_aniversario(); //publico

//Instanciar um novo objeto
const felicity = new Pessoa('Felicity', "Feminino");

felicity.fazer_aniversario()
console.log(felicity.getIdade())

console.log(typeof(Pessoa)) //function
console.log(typeof(felicity)) //object