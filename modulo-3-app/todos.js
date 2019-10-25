//referenciando elementos da DOM
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

//Utilizando array para o todo já que são textos simples.
var todos = [
  'Fazer Café',
  'Assistir Curso Js',
  'Ver Comunidade Js'
];

//Renderizando todos em tela
function renderTodos() {
   listElement.innerHTML = ''; //tudo que estiver no html será vazio assim não irá repetir a lista
   
   //percorrendo todo array e retorna dentro da váriavel todo
   for (todo of todos) {
     var todoElement = document.createElement('li');
     var todoText = document.createTextNode(todo);//Ela contém o texto de cada todo
     
     //Criando elemento a pra exclusão do todo de acordo com seu índice
     var linkElement = document.createElement('a');//criando elemento de link
     
     linkElement.setAttribute('href', '#');
     //procurando no array de todo o indice do todo e retorna a posição
     var pos = todos.indexOf(todo);

     //Excluindo de acordo com o indice da posição quando clicado 
     linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');

     var linkText = document.createTextNode('Excluir');
     
     //Adicionando texto ao elemento a
     linkElement.appendChild(linkText);

    //Adicionado todotext dentro do todoelement(li)
    todoElement.appendChild(todoText);
    //Adicionando todoelement dentro do listelement(ul)
    listElement.appendChild(todoElement);
   }
}
//Chamando a função
renderTodos();

//Criando a função de adicionar todo
function addTodo() {
    var todoText = inputElement.value; //pegando o valor digitado do input

	 todos.push(todoText);//adicionando o valor ao final da lista
    inputElement.value = '';//definindo como vazio
    renderTodos();//chamando a função para renderizar já com o novo valor atribuido a lista
}

btnElement.onclick = addTodo;//quando clicado adiciona item a lista

//Criando a função de exclusão do todo recebendo a posição array
function deleteTodo(pos) {
   todos.splice(pos, 1);//método splice remove remove o item de acordo a posição repassada
   renderTodos();
}