var nome1;
nome1 = "Joaquim";
var idade1 = 20;
var bairro2 = "centro";
console.log("O nome é : " + nome1);
console.log("A idade é : " + idade1);
var nome;
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
//nome da função[saudação] (chave[nome]:valor[string], chave[nome]:valor[number] = parametro[18])
function saudacao(nome, idade, bairro) {
    if (bairro === void 0) { bairro = "tribobo."; }
    console.log("Olá " + nome + ", você tem " + idade + " anos" + " e mora em " + bairro);
}
//função "saudação" (primeira chave[nome = "joaquim"] + degunda chave[idade = "0"])
saudacao("joaquim", 15);
//função "saudação" (primeira chave[nome = "antonio"] + segunda chave[idade = "50"])
saudacao("antonio", 50);
saudacao("maquinhos", 20);
var somarNumeros = function (x, y) {
    return x + y;
};
function somarNumerosOld(x, y) {
    return x + y;
}
;
var somarNumerosTres = function (x, y) {
    return x + y;
};
console.log(somarNumeros(6, 1));
console.log(somarNumerosOld(5, 8));
console.log(somarNumerosTres(4, 2));
var numerosDeTitulos = function (valor) {
    return valor > 10;
};
var titulos = 6;
console.log("Ter " +
    titulos + " é suficiente para passar o Flamengo ?  "
    + (numerosDeTitulos(titulos) ? 'sim' : 'não'));
console.log("Ter " + titulos + " \u00E9 suficiente para passar o flamengo ? " + (numerosDeTitulos(titulos) ? 'sim' : 'não'));
