"use strict";
/*O js é uma linguagem de tipos dinamicos, onde vocÊ cria uma variavel pode-se obter o tipo que se quiser.*/
//String
let nome = 'Lucas';
console.log(nome);
// nome = 28 --> não é possível inferir valor pois ambos são de diferentes tipos.
//numbers
let idade = 27;
// idade = 'ana'
idade = 27.5; //--> não faz destinção de pontos flutuantes e --> não é possível inferir valor pois ambos são de diferentes tipos.
console.log(idade);
//boolean 
let possuiHobbies = false;
// possuiHobbies = 1 --> não é possível inferir valor pois ambos são de diferentes tipos.
console.log(possuiHobbies);
//tipos explícitos
//let minhaIdade --> tipo dinâmico
let minhaIdade; //tipo dinâmico
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 27;
//Se não for definido uma variavel, nem o tipo, e nem inicializa a variavel significa que automaticamente a variavel
//será tratada como tipo any.
//Tipo array
let hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
//Tupla = array de tipos de uma quantidade pre-definida de tipos pro exemplo um array de 3 posições sendo 1string, 2number, 3number
let endereco = ["Av principal", 99, "a"];
console.log(endereco);
endereco = ["Rua importante", 1260, "a"];
console.log(endereco);
//Enums --> são enúmerações como no java, onde se define valores pré-definidos, como seg,ter,quar,quin,sex,sab e dom
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Verde, Cor.Vermelho, ('Dois valores com 100 não geram conflitos'));
//Any --> torna as variaveis como é no JS via de regra é bom evitar, é util para migrar pra de js para ts
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//?Funções --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//Tipando funções com parametros que devem retornar um tipo determinado..
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
//Tipando funções que devem retornar um valor vazio ou que não retornam nada.
function digaOi() {
    console.log('Oi');
    // return minhaIdade // --> Conflito no tipo.
}
//Tipando funções com parametros.
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
//?Funções --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!Usando Tipos em Funções (Parâmetros e Retorno) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//Tipo Função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 5));
//!! Usando Tipos em Funções (Parâmetros e Retorno) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//?Objetos e Tipos --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//objetos
let usuario = {
    nome: 'Lucas',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    nome: 'Mari',
    idade: 31
};
console.log(usuario);
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
let funcionario2 = {
    supervisores: ['Hugo', 'Thiago'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
//!!Definindo Tipos Personalizados (Alias) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//??Tipos com Union Types --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// Union Types
//Aqui vamos supor que vc pode aceitar essa variavel nota como number e tb como string e nesse caso
// que e interessante usar os union types.
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//??Tipos com Union Types --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!Checando Tipos em Runtime --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//A checagem de tipos é feita de forma automatica pelo computador na hora da compilação, mas também é possível fazer
//de forma manual.
//Checando tipos de forma manual
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
//!!Checando Tipos em Runtime --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//??O tipo never --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*
Suponhamos que tenhamos uma função e ela termina normalmente, como é o caso do void a cima

No tipo never é quando queremos dizer explicitamente que a função nunca vai retornar, porque ela provavelmente
vai ficar em looping, ou quando a função temrina com erro.
*/
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome.');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarProduto();
//??O tipo never --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
