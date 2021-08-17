var nome;
nome = "Joaquim";
var idade = 20;
console.log("O nome é : " + nome);
console.log("A idade é : " + idade);
function saudacao(nome, idade) {
    if (idade === void 0) { idade = 18; }
    console.log(" Olá " + nome + " você tem " + idade + " anos. ");
}
saudacao("Danilo");
var somar = function (x, y) {
    return x + y;
};
console.log(somar(6, 1));
var numeroDeTitulos = function (valor) {
    return valor > 10;
};
var titulos = 6;
console.log("Ter " + titulos + " é suficiente para passar o Flamengo? " + (numeroDeTitulos(titulos) ? 'SIM' : "NÃO"));
console.log("Ter " + titulos + " \u00E9 suficiente para passar o Flamengo? " + (numeroDeTitulos(titulos) ? 'SIM' : 'NÃO'));
