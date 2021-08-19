import { Veiculo } from './veiculo';
export class Caminhao extends Veiculo{
    tamanhoCacamba: number;

    constructor (cor: string, fabricante: string, modelo: string, tamanhoCacamba: number){
       super(cor, fabricante, modelo);
       this.tamanhoCacamba = tamanhoCacamba; 
    }

    descarregarCaminhao(){
        console.log("Atenção caminhão descarregando material !");
    }
    }

