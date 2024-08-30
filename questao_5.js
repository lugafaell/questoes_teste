let stringOriginal = "rafael";

let stringInvertida = "";

for (let i = stringOriginal.length - 1; i >= 0; i--) {
  stringInvertida += stringOriginal[i];
}

console.log("String original: " + stringOriginal);
console.log("String invertida: " + stringInvertida);
