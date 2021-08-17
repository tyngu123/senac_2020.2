let nome: string;

nome = "Joaquim";

let idade: number = 20;

let bairro = "centro";

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



function saudacao(nome: string, idade: number = 18): void{
    console.log("Olá " + nome + " você tem " + idade + " anos.");


}
saudacao("Joaquim");
saudacao("antonio", 50);


// let - variavel pode trocar o valor // const - valor da variavel e constante nao deixa você substituir o valor

// arrow function
    const somarNumeros = ( x: number, y: number) => {
        return x+y
    };

    console.log(somarNumeros(6, 1));

    function somarNumerosOld(x: number, y: number): number{
        return x + y;

    }

    let somarNumeroTres = function (x: number, y: number): number{
        return x+y;

    }

    let numeroDeTitulos = function (valor: number): boolean {
        return valor >= 10;
    }



let titulos: number = 10;
        console.log("Ter " + titulos + " é suficiente para passar o Vasco ?" + (numeroDeTitulos(titulos) ? 'Sim' : 'Não')) ;

        console.log(`Ter ${titulos} é suficiente para passar o Vasco? ${(numeroDeTitulos(titulos) ? 'Sim' : 'Não')}`);  