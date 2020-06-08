var linkElement = document.createElement("a");
var textElement = document.createTextNode("Link pro google");
var containerElement = document.querySelector("div#app");
var inputElement = document.querySelector("input#nome");

linkElement.setAttribute("href", "https://www.google.com/");
linkElement.setAttribute("title", "pagina do google");

linkElement.appendChild(textElement);

containerElement.appendChild(linkElement);
containerElement.removeChild(inputElement);