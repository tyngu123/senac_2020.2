var nome;
nome = "Gabriel";
var idade = 20;
var bairro = "Centro";
console.log("O nome é: " + nome);
console.log("A idade é: " + idade);
// função sem parametro e sem retorno
function qualNome() {
    console.log("executei a função!");
}
// função com parametro e sem retorno
function somar(numero1, numero2) {
    console.log("a soma é: " + (numero1 + numero2));
}
//função com parametro e com retorno
function temMaisTitulos(valor) {
    return valor > 30;
}
qualNome();
somar(5, 2);
console.log("Esse time tem mais título que o vasco?" + temMaisTitulos(8));
