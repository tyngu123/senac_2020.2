let nome: string;

nome = "Joaquim";

let idade: number = 20;

console.log("O nome é : " + nome);
console.log("A idade é : " + idade);


function saudacao(nome: string, idade: number = 18): void{
    console.log(" Olá " + nome + " você tem " + idade + " anos. ");

}

saudacao("Danilo");

const somar = (x: number, y: number) => {

    return x + y;
};

console.log(somar(6,1));

let numeroDeTitulos = function(valor:number):boolean{
    return valor > 10;
}

let titulos:number = 6;

console.log ("Ter " + titulos + " é suficiente para passar o Flamengo? " + (numeroDeTitulos(titulos)? 'SIM' : "NÃO"));

console.log(`Ter ${titulos} é suficiente para passar o Flamengo? ${(numeroDeTitulos(titulos) ? 'SIM' : 'NÃO')}`);

