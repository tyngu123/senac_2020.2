
//Função com tipo de variável padrão. Nesse caso, o "18". Caso não seja passado nenhum parâmetro, o valor padrão assume.
function saudacao(nome: string, idade: number = 18): void{
    console.log("Olá " + nome + " você tem " + idade + " anos.");
}
   //Execução da função.
   saudacao("Joaquim");
   saudacao("antonio", 50);

//Arrow Function exemplo.
const somarNumeros = (x: number, y: number) => {
    return x + y;
};
   //Execução da função.
   console.log(somarNumeros(6, 1));
//--------------------------------------------------------------------------------


//Outras formas de escrever funções.
//--------------------------------------------------------------------------------
//"1".
function somarNumerosOld(x: number, y: number): number{
    return x + y;
}
   //Execução da função.
   console.log(somarNumerosOld(9, 1));
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
//"2".
let somarNumerosTres = function(x: number, y: number): number{
    return x + y;
}
   //Execução da função.
console.log(somarNumerosTres(4, 1));
//--------------------------------------------------------------------------------


//Função/operador ternária exemplo.
let numeroDeTitulos = function(valor: number): boolean{
    return valor > 10;
}
let titulos: number = 6;

console.log("Ter " + 
           titulos + " é suficiente para passar o flamengo? " 
                   + (numeroDeTitulos(titulos) ? 'SIM' : 'NÃO'));

    //Outra forma de executar.
    console.log(`Ter ${titulos} é suficiente para passar o Flamengo? ${numeroDeTitulos(titulos) ? 'SIM' : 'NÃO'}`);