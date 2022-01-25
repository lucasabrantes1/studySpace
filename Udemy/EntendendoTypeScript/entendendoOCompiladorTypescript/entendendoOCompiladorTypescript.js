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
console.log(`Nome = ${nome}`);
/*Para resolvermos isso devemos adicionar a seguinte propriedade dentro de compilerOptions
 no arquivo tsconfig.json
 
 "noEmitOnError": true,
 

 ou seja ele não ira emitir quando houver um erro, ou seja oarquivo js compilado apartir do ts.
 */
//!!Compilação e "noEmitOnError" --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
