let xhr = new XMLHttpRequest();
let p = document.getElementById("nome")
let img = document.createElement("img");


console.log('UNSENT', xhr.readyState);

xhr.open('GET', 'https://restcountries.com/v3.1/name/brazil', true);
console.log('OPENED', xhr.readyState);

xhr.onprogress = function () {
  console.log('LOADING', xhr.readyState);
};
xhr.onload = function () {
  console.log('DONE', xhr.readyState);
  console.log(JSON.parse (xhr.responseText))
  let resultado = JSON.parse(xhr.responseText);
  p.innerText = resultado[0].name.common +", "+resultado[0].name.official
  
  img.src = resultado[0].flags.png;
  bandeira.appendChild(img);
  
};
xhr.send();




      
