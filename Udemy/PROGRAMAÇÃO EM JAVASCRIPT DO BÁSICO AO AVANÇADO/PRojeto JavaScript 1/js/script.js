// 1 referenciar o input
let input = document.querySelector("input[name=tarefa]");
// 2 referenciar o button
let btn = document.querySelector("#botao");
// 3 referenciar a lista
let lista = document.querySelector("#lista");


let tarefas = [
    'Jogar GTA1',
    'Jogar GTA2',
    'Jogar GTA3',
    'Jogar GTA4',
    'Jogar GTA5',
    'Jogar GTA6',
]

function renderizarTarefas(){
    for(tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li')

        //Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action')

        //Criar um texto
        let itemTexto = document.createTextNode(tarefa)
        
        //Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto)

        //Adicionar o item da lista na lista
        lista.appendChild(itemLista)


    }
}
//Executando a função para renderizar as tarefas
renderizarTarefas()

/* <li class="list-group-item list-group-item-action">Jogar GTA5</li>
<li class="list-group-item list-group-item-action">Jogar GTA5</li>
<li class="list-group-item list-group-item-action">Jogar GTA5</li>
<li class="list-group-item list-group-item-action">Jogar GTA5</li>
<li class="list-group-item list-group-item-action">Jogar GTA5</li>
<li class="list-group-item list-group-item-action">Jogar GTA5</li>
*/
