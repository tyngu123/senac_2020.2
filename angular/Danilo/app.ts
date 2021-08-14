let nome: string;

nome = "Danilo";

let idade: number = 20;

console.log("O nome é : " + nome);
console.log("A idade é : " + idade);

//função sem parametro e sem retorno

function qualNome(): void{
    console.log("Executei a função");
}
function somar(numero1: number,numero2: number):void {
    console.log("a soma é: " + (numero1 + numero2));
}

//função com parametro e com retorno

function temMaisTitulo(valor: number):boolean{
    return valor > 30;
}

qualNome();
somar(5, 2);
console.log("Esse time tem mais titulo que o Flamengo? " + temMaisTitulo(45));