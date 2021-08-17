var idadeParaBeber = function (valor) {
    return valor > 18;
};
var idadeMinima = 23;
console.log("Com " + idadeMinima + " anos voc\u00EA j\u00E1 pode beber? " + (idadeParaBeber(idadeMinima) ? 'SIM' : 'NÃO'));
