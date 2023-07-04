// Definindo as variáveis
var nomeCompleto = "Marco Aurélio Tello Fonseca Junior";
var num1 = 10;
var num2 = 5;
var soma = num1 + num2;
var multi = num1 * num2;

// Exibindo o resultado da soma em um alert
alert("A soma dos números é: " + soma);

// Exibindo o nome e o resultado da multiplicação no console
console.log("Nome Completo: " + nomeCompleto);
console.log("A multiplicação dos números é: " + multi);

// Função para subtrair dois números
function subtrairNumeros(num1, num2) {
  if (num1 < num2) {
    return "Não foi possível subtrair";
  }
  return num1 - num2;
}

// Função para dividir dois números
function dividirNumeros(num1, num2) {
  if (num2 < 0) {
    return "Não foi possível dividir";
  }
  return num1 / num2;
}

// Testando as funções
console.log("Subtração: " + subtrairNumeros(8, 3)); // Exemplo válido
console.log("Subtração: " + subtrairNumeros(3, 8)); // Exemplo inválido

console.log("Divisão: " + dividirNumeros(10, 2)); // Exemplo válido
console.log("Divisão: " + dividirNumeros(10, -2)); // Exemplo inválido


// Criando o objeto fruta
var fruta = {
  nome: "Maçã",
  cor: "Vermelha",
  peso: 150,
  tipo: "fruta"
};

// Exibindo o objeto no console
console.log(fruta);

// Criando o array de alimentos
var alimentos = [
  {
    nome: "Maçã",
    cor: "Vermelha",
    peso: 150,
    tipo: "fruta"
  },
  {
    nome: "Alface",
    cor: "Verde",
    peso: 100,
    tipo: "verdura"
  },
  {
    nome: "Cenoura",
    cor: "Laranja",
    peso: 200,
    tipo: "legume"
  },
  {
    nome: "Banana",
    cor: "Amarela",
    peso: 120,
    tipo: "fruta"
  },
  {
    nome: "Brócolis",
    cor: "Verde",
    peso: 80,
    tipo: "verdura"
  }
];

// Exibindo o array de alimentos no console
console.log(alimentos);
