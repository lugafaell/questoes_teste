const dadosFaturamento = {
  faturamento_diario: [
    { dia: 1, valor: 1500 },
    { dia: 2, valor: 2200 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 1800 },
    { dia: 5, valor: 2300 },
    { dia: 6, valor: 0 },
    { dia: 7, valor: 1200 },
    { dia: 8, valor: 3000 },
    { dia: 9, valor: 1600 },
    { dia: 10, valor: 0 },
    { dia: 11, valor: 2800 },
    { dia: 12, valor: 2500 },
    { dia: 13, valor: 0 },
    { dia: 14, valor: 0 },
    { dia: 15, valor: 3400 },
    { dia: 16, valor: 2300 },
    { dia: 17, valor: 2000 },
    { dia: 18, valor: 1900 },
    { dia: 19, valor: 0 },
    { dia: 20, valor: 3500 },
    { dia: 21, valor: 0 },
    { dia: 22, valor: 3100 },
    { dia: 23, valor: 2600 },
    { dia: 24, valor: 3000 },
    { dia: 25, valor: 2100 },
    { dia: 26, valor: 1700 },
    { dia: 27, valor: 1400 },
    { dia: 28, valor: 0 },
    { dia: 29, valor: 3200 },
    { dia: 30, valor: 3600 },
  ],
};

function calcularFaturamento(faturamento) {
  let menorFaturamento = null;
  let maiorFaturamento = null;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;
  let diasAcimaDaMedia = 0;

  for (let i = 0; i < faturamento.length; i++) {
    let valor = faturamento[i].valor;

    if (valor === 0) {
      continue;
    }

    if (menorFaturamento === null || valor < menorFaturamento) {
      menorFaturamento = valor;
    }

    if (maiorFaturamento === null || valor > maiorFaturamento) {
      maiorFaturamento = valor;
    }

    somaFaturamento += valor;
    diasComFaturamento++;
  }

  const mediaMensal = somaFaturamento / diasComFaturamento;

  for (let i = 0; i < faturamento.length; i++) {
    let valor = faturamento[i].valor;

    if (valor === 0) {
      continue;
    }

    if (valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorFaturamento: menorFaturamento,
    maiorFaturamento: maiorFaturamento,
    diasAcimaDaMedia: diasAcimaDaMedia,
  };
}

const resultado = calcularFaturamento(dadosFaturamento.faturamento_diario);
console.log("Menor faturamento: " + resultado.menorFaturamento);
console.log("Maior faturamento: " + resultado.maiorFaturamento);
console.log(
  "Dias com faturamento acima da média: " + resultado.diasAcimaDaMedia
);
