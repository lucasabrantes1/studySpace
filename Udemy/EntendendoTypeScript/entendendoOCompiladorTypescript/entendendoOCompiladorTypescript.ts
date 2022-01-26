//!!Compilação e "noEmitOnError" --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
/*Mesmo quando existe um erro no typescript, ainda assim ele gera o javascript no arquivo tsconfig,json
Existe uma opção para barrar essa complição apos o erro.
*/

let canal: string = "Spacetoday"
let inscritos: number = 653185
// canal = inscritos //--> em js funciona mas em ts gera um proble se salvarmos o arquivo ele vai gerar em js
console.log(`Canal = ${canal}`)


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

function soma(a: any, b: any){
    return a +b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'
//??Evitando "Any" Implícito --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---