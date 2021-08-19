import { Veiculo } from './veiculo';
export class Caminhao extends Veiculo{
    tamanhoCacamba: number;

    constructor (cor: string, fabricante: string, modelo: string, cacamba: number){
       super(cor, fabricante, modelo);
       this.tamanhoCacamba = cacamba; 
    }

    descarregarCaminhao(){
        console.log("Descarregando caminhão.");
        }
    }