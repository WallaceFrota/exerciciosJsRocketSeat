// <!-- Developed by: Wallace Frota -->
// <!-- Instagram: @frotadev -->
//Utilizando Ajax para pegar informações sem recarregar a página
var xhr = new XMLHttpRequest(); //método request

//Método get para pegar as informações repassando a url
xhr.open('GET', 'https://api.github.com/users/wallacefrota');
xhr.send(null);

//Verificando se a resposta do servidor foi retornada
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		console.log(JSON.parse(xhr.responseText));
	}
}