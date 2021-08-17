var nome;
nome = "Joaquim";
var idade = 20;
var bairro = "centro";
console.log("O nome é : " + nome);
console.log("A idade é : " + idade);
// função sem parametro e sem retorno
function qualNome() {
    console.log("executei a função!!");
}
// função com parâmetro e sem retorno
function somar(numero1, numero2) {
    console.log("a soma é : " + (numero1 + numero2));
}
// função com parâmetro e com retorno
function temMaisTitulo(valor) {
    return valor > 30;
}
qualNome();
somar(5, 2);
console.log("Esse time tem mais título que o Flamengo? " + temMaisTitulo(45));
function saudacao(nome, idade) {
    if (idade === void 0) { idade = 18; }
    console.log("Olá " + nome + " você tem " + idade + " anos.");
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
    return valor >= 10;
};
var titulos = 10;
console.log("Ter " +
    titulos + " é suficiente para passar o Flamengo? "
    + (numeroDeTitulos(titulos) ? 'SIM' : 'NÃO'));
console.log("Ter " + titulos + " \u00E9 suficiente para passar o Flamengo? " + (numeroDeTitulos(titulos) ? 'SIM' : 'NÃO'));
