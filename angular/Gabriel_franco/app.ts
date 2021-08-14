let nome : string; 

nome = "Gabriel";

let idade: number = 20;

let bairro = "Centro";

console.log("O nome é: " + nome);
console.log("A idade é: " + idade);

// função sem parametro e sem retorno
function qualNome(): void{
    console.log("executei a função!");
}

// função com parametro e sem retorno
function somar(numero1: number, numero2: number): void{
    console.log("a soma é: " + (numero1 + numero2));
    
}

//função com parametro e com retorno
function temMaisTitulos(valor: number): boolean{
    return valor > 30;
}

qualNome();
somar(5, 2);
console.log("Esse time tem mais título que o vasco?" + temMaisTitulos(8));

