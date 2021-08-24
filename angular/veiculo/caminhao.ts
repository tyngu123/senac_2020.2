import { Veiculo } from "./veiculo";

export class Caminhao extends Veiculo {
    constructor(cor: string,modelo:string,fabricante:string,tipo:string) {
        super(cor,modelo,fabricante,tipo);
    } 

}