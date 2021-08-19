import { Veiculo } from "./veiculo";

export class Caminhao extends Veiculo {
    tamanhoCacamba:number
    constructor(cor:string ,modelo:string ,fabricante:string){
        super(cor, modelo, fabricante);

    }
    Descarregar(){
        console.log(`O caminhao está descarregando`);
    }

 
 }
     
