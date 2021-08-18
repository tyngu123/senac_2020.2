
export class Laptop{
    tela:number;
    cor:String;
    constructor(tela:number, cor: String) {
        this.tela = tela;
        this.cor = cor;

    }
    ligarMonitor()  {
        console.log(`o monitor foi ligador!`);
    }
    deligarMonitor(){
        console.log(`o monitor foi desligado`)
    }
}
