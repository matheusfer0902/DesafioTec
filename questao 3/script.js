
const fs = require('fs');

// Lendo o arquivo JSON, criado pelo chatGPT
fs.readFile('faturamento.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    return;
  }

  // Parseando o JSON
  const faturamentoMensal = JSON.parse(data);

  const estatisticas = calcularEstatisticas(faturamentoMensal);
  console.log("Menor valor de faturamento: ", estatisticas.menorValor);
  console.log("Maior valor de faturamento: ", estatisticas.maiorValor);
  console.log("Média mensal: ", estatisticas.mediaMensal);
  console.log("Número de dias com faturamento acima da média: ", estatisticas.diasAcimaDaMedia);
});

function calcularEstatisticas(faturamento) {
    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia,
        mediaMensal
    };
}
