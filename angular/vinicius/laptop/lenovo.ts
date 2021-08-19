import { Laptop } from './laptop';

export  class Lenovo extends Laptop {
    constructor (tamanho: number){
       super(tamanho); 
    }

    aumentarBrilho(valor: number){
        console.log(`o brilho aumento em ${valor} pontos!`);
    }
}