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
    console.log(" ola " + nome + " voçê tem " + idade + " anos.");
}
saudacao("joaquim");
saudacao("antonio", 50);
saudacao("Carlos", 15);
var somarNumeros = function (x, y) {
    return x + y;
};
function somarNumerosOld(x, y) {
    return x + y;
}
var somarNumerostres = function (x, y) {
    return x + y;
};
console.log(somarNumeros(6, 1));
console.log(somarNumerosOld(4, 1));
console.log(somarNumerostres(9, 1));
var numerosDeTitulos = function (valor) {
    return valor > 10;
};
var titulos = 6;
console.log("Ter " +
    titulos + " é suficiente para passar o Flamengo ?  "
    + (numerosDeTitulos(titulos) ? 'sim' : 'não'));
console.log("Ter " + titulos + " \u00E9 suficiente para passar o flamengo ? " + (numerosDeTitulos(titulos) ? 'sim' : 'não'));
