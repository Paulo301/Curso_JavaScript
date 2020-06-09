//Exercicio 1
// 
// function checaIdade(idade) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (idade > 18){
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
//  }

// checaIdade(20)
//   .then(function() {
//   console.log("Maior que 18");
//   })
//   .catch(function() {
//   console.log("Menor que 18");
//   });

//Exercicio 2

var inputElement = document.querySelector("input");
var btnElement = document.querySelector("button");

function adicionar() {
  var inputText = inputElement.value;
  var listElement = document.querySelector("ul");
  var itemElement = document.createElement("li");
  var itemText = document.createTextNode("Carregando...");

  itemElement.appendChild(itemText);

  listElement.appendChild(itemElement);

  axios.get(`https://api.github.com/users/${inputText}/repos`)
  .then(function(response) {
    var containerElement = document.querySelector("#pagina");
    
    listElement.innerHTML = '';

    for (const repo of response.data) {
      var itemElement = document.createElement("li");
      var itemText = document.createTextNode(repo.name);
      
      itemElement.appendChild(itemText);
      listElement.appendChild(itemElement);
    }

    containerElement.appendChild(listElement);
    console.log(response);
  })
  .catch(function(error) {
    if (error.response.status === 404) {
      alert("Usuário não existe!");
    }
  });
}

btnElement.onclick = adicionar;