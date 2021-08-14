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
function temMaisTitulo(valor) {
    return valor > 30;
}
qualNome();
somar(5, 2);
console.log("Esse time tem mais título que o Flamengo? " + temMaisTitulo(45));
