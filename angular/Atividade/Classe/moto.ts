import { Veiculo } from './veiculo';
export class Moto extends Veiculo{
     constructor (cor: string, fabricante: string, modelo: string){
       super(cor, fabricante, modelo);
    }

    empinarMoto(){
        console.log("Dando grau !");
    }
    }
