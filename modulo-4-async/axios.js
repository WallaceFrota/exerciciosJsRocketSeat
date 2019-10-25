//Utilizando framework axios para fazer requisições assíncronas do projeto js
axios.get('https://api.github.com/users/wallacefrota').then(function(response) {
     console.log(response);

  }).catch(function(error) {
     
     console.warn(error, 'Erro na requisição');
});

// Wallace Frota - @frotadev