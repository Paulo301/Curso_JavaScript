// var inputElement = document.getElementById("nome");
// var inputElement = document.getElementsByTagName("input"); //Retorna um vetor
// var inputElement = document.getElementsByClassName("nome"); //Retorna um vetor
// var inputElement = document.querySelector("div#app input[name=nome]");

var inputElement = document.querySelector("input[name=nome]");
var btnElement = document.querySelector("button.botao");

btnElement.onclick = function() {
  var text = inputElement.value;

  alert(text);
};