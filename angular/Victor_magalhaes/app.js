var nome;
nome = "Joaquim";
var idade = 20;
var bairro = "centro";
console.log("O nome é : " + nome);
console.log("A idade é : " + idade);
//função sem parametro e sem retorno
function qualnome() {
    console.log("executei a função!!");
}
//função com parametro e sem retorno
function somar(numero1, numero2) {
    console.log("a soma é : " + (numero1 + numero2));
}
function temMaisTitulos(valor) {
    return valor > 30;
}
qualnome();
somar(5, 2);
console.log("Esse time tem mais titulo que o flamengo ?" + temMaisTitulos(8));
