//Função com tipo de variável padrão. Nesse caso, o "18". Caso não seja passado nenhum parâmetro, o valor padrão assume.
function saudacao(nome, idade) {
    if (idade === void 0) { idade = 18; }
    console.log("Olá " + nome + " você tem " + idade + " anos.");
}
//Execução da função.
saudacao("Joaquim");
saudacao("antonio", 50);
//Arrow Function exemplo.
var somarNumeros = function (x, y) {
    return x + y;
};
//Execução da função.
console.log(somarNumeros(6, 1));
//--------------------------------------------------------------------------------
//Outras formas de escrever funções.
//--------------------------------------------------------------------------------
//"1".
function somarNumerosOld(x, y) {
    return x + y;
}
//Execução da função.
console.log(somarNumerosOld(9, 1));
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//"2".
var somarNumerosTres = function (x, y) {
    return x + y;
};
//Execução da função.
console.log(somarNumerosTres(4, 1));
//--------------------------------------------------------------------------------
//Função/operador ternária exemplo.
var numeroDeTitulos = function (valor) {
    return valor > 10;
};
var titulos = 6;
console.log("Ter " +
    titulos + " é suficiente para passar o flamengo? "
    + (numeroDeTitulos(titulos) ? 'SIM' : 'NÃO'));
//Outra forma de executar.
console.log("Ter " + titulos + " \u00E9 suficiente para passar o Flamengo? " + (numeroDeTitulos(titulos) ? 'SIM' : 'NÃO'));
