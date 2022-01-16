var cursos = [
    'Programação para leigos',
    'Algoritmos e lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Pyhthon',
    'DBA',
    'Programação em Web com Django Framwork',
    'Programação em JavaScript',
];



//Definir uma função
function imprimir(curso, indice){
    console.log(indice + ' ' + curso)
}

//Para cada elemto do meu array passando a função, ou seja ele vai iterar para cada eleemto do nosso array.
// cursos.forEach(imprimir)


//Utilização de uma função anônima (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    // console.log(`${indice} - ${curso}`)
})

for(var i = 0; i< cursos.length; i++){
    // console.log(i + ' - ' + cursos[i])
}