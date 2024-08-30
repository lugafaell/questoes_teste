const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pertenceFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  if (b === num) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
}

rl.question(
  "Digite um número para verificar se pertence à sequência de Fibonacci: ",
  function (numero) {
    numero = parseInt(numero);
    console.log(pertenceFibonacci(numero));
    rl.close();
  }
);
