let nome1: string;

nome1 = "Joaquim";

let idade1: number = 20;

let bairro2 = "centro";

console.log("O nome é : " + nome1);
console.log("A idade é : " + idade1);let nome: string;



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



//nome da função[saudação] (chave[nome]:valor[string], chave[nome]:valor[number] = parametro[18])
function saudacao(nome: string, idade: number, bairro : string = "tribobo." ): void{
    console.log("Olá " + nome +  ", você tem " + idade + " anos" + " e mora em " + bairro);
}
//função "saudação" (primeira chave[nome = "joaquim"] + degunda chave[idade = "0"])
saudacao("joaquim", 15 );
//função "saudação" (primeira chave[nome = "antonio"] + segunda chave[idade = "50"])
saudacao("antonio", 50);

saudacao("maquinhos", 20);




const somarNumeros = (x:number, y: number) => {
    return x + y;
};
function somarNumerosOld(x:number,y: number): number{
    return x + y;
};
let somarNumerosTres = function(x:number, y: number):number{
    return x + y;
}    



console.log(somarNumeros(6,1));
console.log(somarNumerosOld(5, 8));
console.log(somarNumerosTres(4,2));


let numerosDeTitulos = function(valor: number):boolean{
    return valor >10;

}

let titulos:number = 6;
console.log("Ter " +
           titulos + " é suficiente para passar o Flamengo ?  " 
                   + (numerosDeTitulos(titulos)? 'sim' : 'não'));

console.log(`Ter ${titulos} é suficiente para passar o flamengo ? ${(numerosDeTitulos(titulos) ? 'sim' : 'não' )}`);

