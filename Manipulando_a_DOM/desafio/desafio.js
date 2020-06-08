// Desafio 1

// var containerElement = document.querySelector("#pagina");
// var btnElement = document.querySelector("#botao");

// function adicionarQuadrado() {
//   var boxElement = document.createElement("div");

//   boxElement.style.width = 100+"px";
//   boxElement.style.height = 100+"px";
//   boxElement.style.backgroundColor = '#f00';
//   boxElement.onmouseover = trocarCor;
  
//   containerElement.appendChild(boxElement);
// }

// btnElement.onclick = adicionarQuadrado;

// Desafio 2

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//   color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
//  }

// function trocarCor() {
//   var cor = getRandomColor();
//   this.style.backgroundColor = cor;
// }

//Desafio 3

var nomes = ["Diego", "Gabriel", "Lucas"];
var containerElement = document.querySelector("#pagina");
var listElement = document.createElement("ul");

containerElement.appendChild(listElement);

for(const nome of nomes){
  adicionarItem(nome);
}

// Desafio 4
var inputElement = document.createElement("input");
var btnElement = document.createElement("button"); 
var textElement = document.createTextNode("Adicionar");

inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "nome");

btnElement.appendChild(textElement);
btnElement.onclick = adicionar;

containerElement.appendChild(inputElement);
containerElement.appendChild(btnElement);

function adicionar() {
  var inputElement = document.querySelector("input");
  var textoInput = inputElement.value;

  adicionarItem(textoInput);

  inputElement.value = "";
}

function adicionarItem(item) {
  var listElement = document.querySelector("ul");
  var itemElement = document.createElement("li");
  var textElement = document.createTextNode(item);

  itemElement.appendChild(textElement);
  listElement.appendChild(itemElement);
}