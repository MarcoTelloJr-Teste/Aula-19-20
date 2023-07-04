//Atividade nome
let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value;
  tasks.push(newTask);
  taskInput.value = "";
}

function displayTasks() {
  console.log(tasks);

}

//Calculadora
function add() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result").innerText = "Resultado: " + result;
}

function subtract() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 - num2;
  document.getElementById("result").innerText = "Resultado: " + result;
}

function multiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 * num2;
  document.getElementById("result").innerText = "Resultado: " + result;
}

function divide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 / num2;
  document.getElementById("result").innerText = "Resultado: " + result;
}

