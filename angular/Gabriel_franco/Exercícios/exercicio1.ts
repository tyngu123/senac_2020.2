let idadeParaBeber = function(valor: number): boolean{
    return valor > 18;
}

let idadeMinima:number = 23;

console.log(`Com ${idadeMinima} anos você já pode beber? ${(idadeParaBeber(idadeMinima) ? 'SIM' : 'NÃO')}`);