let nome: string;

nome = "Joaquim";

let idade: number = 20;

let bairro = "centro";

//console.log("O nome é : " + nome);
//console.log("A idade é : " + idade);

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

//qualNome();
//somar(5, 2);
//console.log("Esse time tem mais título que o Vasco? " + temMaisTitulo(45));

function saudacao(nome: string, idade: number =18): void{
    console.log("Olá " + nome + " você tem " + idade + " anos.");
}

//saudacao("Joaquim");
//saudacao("Antonio", 50);

const somarNumeros = (x: number, y: number) => {
    return x + y;
};

function somarNumerosOld(x: number, y:number): number{
    return x + y;
}

let somarNumerosTres = function(x: number, y: number): number{
    return x + y;
}

//console.log(somarNumeros(6, 1));
//console.log(somarNumerosOld(5, 8));
//console.log(somarNumerosTres(4, 2));


let numeroDeTitulos = function(valor: number): boolean{
    return valor > 10;
}

let titulos:number = 10;

//console.log("Ter " + 
           //titulos + " títulos é suficiente para passar o Vasco? " 
                //   + (numeroDeTitulos(titulos) ? 'SIM' : 'NÃO'));

//console.log(`Ter ${titulos} títulos é suficiente para passar o Vasco? ${(numeroDeTitulos(titulos) ? 'SIM' : 'NÃO')}`);

let escreva  = (valor: string) => console.log(`O nome é ${valor}`);

escreva (`João ninguém.`);



