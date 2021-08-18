import { Laptop } from "./laptop";

export class lenovo extends Laptop{
    constructor (tamanho: number){
        super(tamanho);
    }

    aumentarBrilho(valor: number){
        console.log(`O Brilho aumentou em ${valor}pontos!`);
    }
}