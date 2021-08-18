export class Laptop{
    tamanhoMonitor:number;
    
    constructor(tela:number){
        this.tamanhoMonitor = tela;  
    }
    ligarMonitor() {
        console.log(`O Monitor do laptop foi ligado!`);
    }
}