let texto = document.getElementById("itemInput")
let addItem = document.getElementById("saveButton")
let viewItems = document.getElementById("viewButton")


let lista = []
function adicionar() {
  lista.push(texto.value)
  localStorage.setItem("lista", JSON.stringify(lista))
}

function visualizar(){
  alert(localStorage.getItem("lista"))
}


function limpar() {
  alert("Lista limpa",localStorage.clear("lista"));
}


