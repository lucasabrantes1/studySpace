// 1 referenciar o input
let input = document.querySelector("input[name=tarefa]");
// 2 referenciar o button
let btn = document.querySelector("#botao");
// 3 referenciar a lista
let lista = document.querySelector("#lista");
//4 card
let card = document.querySelector('.card')

let tarefas = [
  "Jogar GTA1",
  "Jogar GTA2",
  "Jogar GTA3",
  "Jogar GTA4",
  "Jogar GTA5",
  "Jogar GTA6",
];

function renderizarTarefas() {
  //Limpar a listagem de itens antes de renderizar novamente a tela
  lista.innerHTML = "";
  for (tarefa of tarefas) {
    //Criar o item da lista
    let itemLista = document.createElement("li");

    //Adicionar classes no item da lista
    itemLista.setAttribute("class", "list-group-item list-group-item-action");

    //Criar um texto
    let itemTexto = document.createTextNode(tarefa);

    //Adicionar o texto no item da lista
    itemLista.appendChild(itemTexto);

    //Adicionar o item da lista na lista
    lista.appendChild(itemLista);

    //Limpar o input
    input.value = "";
  }
}
//Executando a função para renderizar as tarefas
renderizarTarefas();

//1) Escutar o evento de clique no botão
btn.onclick = function () {
  //2) Capturar o valor digitado pelo usuário no input
  let novaTarefa = input.value;

  if (novaTarefa !== "") {
    //3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
    tarefas.push(novaTarefa);

    //4) Executando a função para renderizar as tarefas
    renderizarTarefas();

    //Limpa o input
    input.value = "";

    //Limpar mensagens de erro(spans)
    removerSpans();
  } else {
    //Limpar mensagens de erro(spans)
    removerSpans();

    let span = document.createElement("span");
    span.setAttribute("class", "alert alert-warning");

    let msg = document.createTextNode("Você precisa informar a tarefa!");

    span.appendChild(msg);

    card.appendChild(span);
  }
};

function removerSpans() {
  let spans = document.querySelectorAll("span");

  for (let i = 0; i < spans.length; i++) {
    card.removeChild(spans[i]);
  }
}
