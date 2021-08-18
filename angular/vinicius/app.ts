function saudacao (nome: string, idade:number = 18): void{
    console.log("ola" + nome + "você tem " + idade + "anos.");
}

saudacao("joaquim");
saudacao("antonio", 50);

const somarNumeros = (x: number, y: number) =>{
    return x + y ;

};

function somarNumerosOld(x:number,y: number):number{
    return x + y;
}

let somarNumerosTres = function(x: number, y :number): number{
    return x + y;
}

console.log(somarNumeros(6, 1));
console.log(somarNumerosOld(5,8));
console.log(somarNumerosTres(4,2))

let numeroDeTitulos = function(valor: number): boolean{
    return valor > 10;
}

let titulos:number = 10;

console.log("ter"+
         titulos + " é suficiente para passar o flamengo?" 
                 + (numeroDeTitulos(titulos) ? 'sim' : 'não'));

console.log(`Ter ${titulos} é suficiente para passar o Flamengo ? ${numeroDeTitulos(titulos) ?'sim': 'não'}');
