let nome: string;

nome = "Joaquim";

let idade: number = 20;

let bairro = "centro"

console.log("O nome é : " + nome);
console.log("A idade é : " + idade);


//Função sem parametro e sem retorno//
function qualNome(): void{
    console.log("executei a função!!");
}


//Função com parametro e sem retorno//
function somar(numero1: number, numero2: number): void{
    console.log("a soma é : " + (numero1 + numero2));
}



function temMaisTitulo(valor: number): boolean{
    return valor > 30;
}



qualNome();
somar(5, 2);
console.log("Esse time tem mais titulos que o flamengo? " + temMaisTitulo(45));

