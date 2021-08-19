import { Veiculo } from "./veiculo";
export class Caminhao extends Veiculo {
    tamanhoCacamba: number;

    constructor (modelo: number, fabricante: string, cor: string, cacamba: number){
        super(modelo, fabricante, cor,);
        this.tamanhoCacamba = cacamba;
    }
    descarregarMaterial(produto: number){
        console.log(`O caminhão fez a descarga de ${produto} litros de cimento!`);  
    }
}
