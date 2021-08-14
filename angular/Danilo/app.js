var nome;
nome = "Danilo";
var idade = 20;
console.log("O nome é : " + nome);
console.log("A idade é : " + idade);
//função sem parametro e sem retorno
function qualNome() {
    console.log("Executei a função");
}
function somar(numero1, numero2) {
    console.log("a soma é: " + (numero1 + numero2));
}
//função com parametro e com retorno
function temMaisTitulo(valor) {
    return valor > 30;
}
qualNome();
somar(5, 2);
console.log("Esse time tem mais titulo que o Flamengo? " + temMaisTitulo(45));
