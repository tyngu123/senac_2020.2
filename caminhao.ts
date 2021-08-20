import {Veiculo} from "./veiculo";
export class Caminhao extends Veiculo {
    tamanhoCacamba: number;

    constructor (modelo: string, fabricante: string, cor: string, cacamba: number) {
        super(modelo, fabricante, cor);
        this.tamanhoCacamba = cacamba;

    }

    descarregarMaterial(quantidade: number) {
        console.log("O caminhão fez a descarga de ${quantidade} kilos de tijolos!")
    }

}