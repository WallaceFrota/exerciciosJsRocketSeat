//Utilizando promises biblioteca ajax para requisições
var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', 'https://api.github.com/users/wallacefrota');
       xhr.send(null);

        xhr.onreadystatechange = function() {
       	    if (xhr.readyState === 4) {
       		  if (xhr.status === 200) {//verificando se retornou com sucesso status 200
       			resolve(JSON.parse(xhr.responseText));
       		  } else {
       		  	reject('Erro na requisição!');
       		  }
       	   }

        }
  });

}
minhaPromise()
//executado quando chamado o resolve código se sucesso
 .then(function(response){
	console.log(response);
 })
//executado quando não se tem resultado positivo na requisição
 .catch(function(error){
 	console.warn(error);
 });