import { Veiculo } from "./veiculo";
export class Moto extends Veiculo{
    tamanhoCacamba:number
    constructor(cor:string ,modelo:string ,fabricante:string){
        super(cor, modelo, fabricante);
    }
 
Empinar(){
    console.log(`empinado a moto`);
}
}