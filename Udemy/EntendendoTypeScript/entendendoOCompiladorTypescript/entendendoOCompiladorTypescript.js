"use strict";
//!!Compilação e "noEmitOnError" --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*Mesmo quando existe um erro no typescript, ainda assim ele gera o javascript no arquivo tsconfig,json
Existe uma opção para barrar essa complição apos o erro.
*/
let canal = "Spacetoday";
let inscritos = 653185;
// canal = inscritos //--> em js funciona mas em ts gera um proble se salvarmos o arquivo ele vai gerar em js
console.log(`Canal = ${canal}`);
// let nome = 'Pedro' --> erro de scopo
// console.log(`Nome = ${nome}`);
/*Para resolvermos isso devemos adicionar a seguinte propriedade dentro de compilerOptions
 no arquivo tsconfig.json
 
 "noEmitOnError": true,
 

 ou seja ele não ira emitir quando houver um erro, ou seja oarquivo js compilado apartir do ts.
 */
//!!Compilação e "noEmitOnError" --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//??Alterando o Target (Versão do JavaScript) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*A porpiedade target, diz qual será a versão do JS que sera usado no arquivo compilado
"target": "es6",
*/
//??Alterando o Target (Versão do JavaScript) --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!Debugando com Source Maps --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/* A propriedade "sourceMap": true, passa a gerar um arquivo .map
O intuito do sourcemap é quando habilitar o console de desenvolvedor do browser ele com ese arquivo .map gerado
será possivel ver o código original JS que está sendo utilizado para ver lá.
*/
//!!Debugando com Source Maps --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//??Evitando "Any" Implícito --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*
Serve para dizer que não haja erro, quando uma variavel for implicitamente ao any, por padrão isso é null mas para alterar
isso basta alterar a flag  // "noImplicitAny": true,
*/
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
//??Evitando "Any" Implícito --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!"strictNullChecks", "noUnusedParameters" e "noUnusedLocals" --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*strictNullChecks --> Checa os nulos, isso pode gerar um problema
noUnusedParameters --> parametros não utilizadas retorna erro
noUnusedLocals --> para variaveis não utilizadas retorna erro
*/
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Fique bem!';
    }
    return saudacao;
}
//!!"strictNullChecks", "noUnusedParameters" e "noUnusedLocals" --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//??Diretório de Saída --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*Outra opção quando se vai ajustar ou copilar os arquivos é a pasta de saida na qual sera gerada os arquivos .js  essa geração é feita  apartir da propriedade no ts.config chamada

"outDir": "./",

"outDir": "./build", --> a copilação ira cair apartir da pasta build
*/
//??Diretório de Saída --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//!!Arquivo de Saída --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*Nessa opção seleciona um unico arquivo, de saída, ao invez de compilar todos os arquivos cada um separado na opçãoo
"outFile": "./",

essa opção é inconpativel com o commonjs, tendo assym que mudar o module para system


"module": "system",
"outFile": "./build/app.js",
*/
//!!Arquivo de Saída --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//# sourceMappingURL=entendendoOCompiladorTypescript.js.map