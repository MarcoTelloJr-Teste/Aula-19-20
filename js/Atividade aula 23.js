// adicionar nota e peso ao localStorage
function adicionarNota() {
  let notaInput = document.getElementById("nota");
  let pesoInput = document.getElementById("peso");

  let nota = parseFloat(notaInput.value);
  let peso = parseFloat(pesoInput.value);

  if (!isNaN(nota) && !isNaN(peso)) {
    let notasSalvas = localStorage.getItem("notas");
    let pesosSalvos = localStorage.getItem("pesos");

    if (notasSalvas === null) {
      notasSalvas = [];
      pesosSalvos = [];
    } else {
      notasSalvas = JSON.parse(notasSalvas);
      pesosSalvos = JSON.parse(pesosSalvos);
    }

    notasSalvas.push(nota);
    pesosSalvos.push(peso);

    localStorage.setItem("notas", JSON.stringify(notasSalvas));
    localStorage.setItem("pesos", JSON.stringify(pesosSalvos));

    // Limpar auto
    notaInput.value = "";
    pesoInput.value = "";

    console.log("Nota e peso adicionados com sucesso.");
  } else {
    alert("Digite valores numéricos válidos para nota e peso.");
  }
}

// Função para calcular e exibir a média ponderada
function calcularMedia() {
  let notasSalvas = localStorage.getItem("notas");
  let pesosSalvos = localStorage.getItem("pesos");

  if (notasSalvas === null || pesosSalvos === null) {
    alert("Nenhuma nota e peso encontrados.");
    return;
  }

  notasSalvas = JSON.parse(notasSalvas);
  pesosSalvos = JSON.parse(pesosSalvos);

  if (notasSalvas.length !== pesosSalvos.length) {
    alert("Número de notas e pesos não corresponde.");
    return;
  }

  let somaProdutos = 0;
  let somaPesos = 0;

  for (let i = 0; i < notasSalvas.length; i++) {
    somaProdutos += notasSalvas[i] * pesosSalvos[i];
    somaPesos += pesosSalvos[i];
  }



  let mediaPonderada = somaProdutos / somaPesos;

  let mediaElement = document.getElementById("media");
  mediaElement.textContent = "Média: " + mediaPonderada.toFixed(2);
}
function limparChaves() {
  localStorage.removeItem("notas");
  localStorage.removeItem("pesos");
  console.log("Chaves do localStorage limpas.");
}

//mudar fundo 
let btnMudarCor = document.getElementById("btnMudarCor");
let fundoBranco = true;

MudarCor.addEventListener("click", function() {
  
  if (fundoBranco) {
    document.body.style.backgroundColor = "gray";
    fundoBranco = false;
  } else {
    document.body.style.backgroundColor = "white";
    fundoBranco = true;
  }
});