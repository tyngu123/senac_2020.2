function saudacao(nome, idade) {
    if (idade === void 0) { idade = 18; }
    console.log("ola" + nome + "você tem " + idade + "anos.");
}
saudacao("joaquim");
saudacao("antonio", 50);
var somarNumeros = function (x, y) {
    return x + y;
};
function somarNumerosOld(x, y) {
    return x + y;
}
var somarNumerosTres = function (x, y) {
    return x + y;
};
console.log(somarNumeros(6, 1));
console.log(somarNumerosOld(5, 8));
console.log(somarNumerosTres(4, 2));
var numeroDeTitulos = function (valor) {
    return valor > 10;
};
var titulos = 10;
console.log("ter" +
    titulos + " é suficiente para passar o flamengo?"
    + (numeroDeTitulos(titulos) ? 'sim' : 'não'));
console.log("ter " + titulos + " \u00E9 suficiente para passar o flamengo? " + numeroDeTitulos(titulos) + "                \n ");
