const fs = require('fs');

// Lendo o arquivo JSON, criado pelo chatGPT
fs.readFile('faturamentoDistribuidora.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }
    // Parseando o JSON
    const faturamento = JSON.parse(data);

    const porcentagens = calcularPorcentagens(faturamento);
    console.log("porcent SP: ", porcentagens.porcentagemSP);
    console.log("porcent RJ: ", porcentagens.porcentagemRJ);
    console.log("porcent MG: ", porcentagens.porcentagemMG);
    console.log("porcent ES: ", porcentagens.porcentagemES);
    console.log("porcent Outros: ", porcentagens.porcentagemOutros);
});

function calcularPorcentagens(faturamento){
    const faturamentoTotal = faturamento.reduce((acc, estado) => acc + estado.valor, 0)

    const valorSP = faturamento.find(estado => estado.estado === "SP").valor;
    const valorRJ = faturamento.find(estado => estado.estado === "RJ").valor;
    const valorMG = faturamento.find(estado => estado.estado === "MG").valor;
    const valorES = faturamento.find(estado => estado.estado === "ES").valor;
    const valorOutros = faturamento.find(estado => estado.estado === "Outros").valor;

    const porcentagemSP = ((valorSP / faturamentoTotal) * 100).toFixed(2);
    const porcentagemRJ = ((valorRJ / faturamentoTotal) * 100).toFixed(2);
    const porcentagemMG = ((valorMG / faturamentoTotal) * 100).toFixed(2);
    const porcentagemES = ((valorES / faturamentoTotal) * 100).toFixed(2);
    const porcentagemOutros = ((valorOutros / faturamentoTotal) * 100).toFixed(2);

    return {
        porcentagemSP,
        porcentagemRJ,
        porcentagemMG,
        porcentagemES,
        porcentagemOutros
    }
}