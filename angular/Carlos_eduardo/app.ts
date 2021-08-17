let nome: string;

nome = "Joaquim";

let idade: number = 20;

let bairro = "centro"

console.log("O nome é : " + nome);
console.log("A idade é : " + idade);

// função sem parametro e sem retorno
function qualNome(): void{
    console.log("executei a função!!");
}

// função com parâmetro e sem retorno
function somar(numero1: number, numero2:number): void{
    console.log("a soma é : " + (numero1 + numero2));
}

// função com parâmetro e com retorno
function temMaisTitulo(valor: number): boolean{
    return valor > 30;
}

qualNome();
somar(5, 2);
console.log("Esse time tem mais título que o Flamengo? " + temMaisTitulo(45));

function saudacao(nome: string, idade: number = 18){
    console.log(" ola " + nome +" voçê tem " + idade + " anos.");
}
saudacao("joaquim");
saudacao("antonio", 50);
saudacao("Carlos", 15);

const somarNumeros = (x: number, y: number) => {
    return x + y;
}


function somarNumerosOld(x: number, y: number): number{
    return x + y;
}

let somarNumerostres = function(x: number, y: number): number{
    return x + y;
}

console.log(somarNumeros(6, 1));
console.log(somarNumerosOld(4, 1));
console.log(somarNumerostres(9, 1));


let numerosDeTitulos = function(valor: number):boolean{
    return valor >10;

}

let titulos:number = 6;
console.log("Ter " +
           titulos + " é suficiente para passar o Flamengo ?  " 
                   + (numerosDeTitulos(titulos)? 'sim' : 'não'));

console.log(`Ter ${titulos} é suficiente para passar o flamengo ? ${(numerosDeTitulos(titulos) ? 'sim' : 'não' )}`);

