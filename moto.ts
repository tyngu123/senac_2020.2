import { Veiculo } from "./veiculo";
export class Moto extends Veiculo {

    constructor (modelo: string, fabricante: string, cor: string) {
        super(modelo, fabricante, cor);
    }
    empinarMoto(tempo: number) {
        console.log("A moto empinou por ${tempo} minutos!");
    }
}