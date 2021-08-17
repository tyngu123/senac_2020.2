let nome: string;

nome = "Joaquim";

let idade: number = 20;

let bairro = "centro";

console.log("O nome é : " + nome);
console.log("A idade é : " + idade);
//função sem parametro e sem retorno
function qualnome(): void{
    console.log("executei a função!!");
}
//função com parametro e sem retorno
function somar(numero1: number, numero2:number): void{
    console.log("a soma é : "+(numero1 + numero2));

}

//função com parametro com retorno
function temMaisTitulos(valor:number): boolean{
    return valor > 30;
}
qualnome();
somar(5,2);
console.log("Esse time tem mais titulo que o flamengo ? " + temMaisTitulos(8));
