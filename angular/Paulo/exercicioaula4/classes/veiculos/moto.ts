import { Veiculo1 } from './veiculo1';

export class Moto extends Veiculo1 {
    constructor (modelo1: number){
        super(modelo1);
    }

    empinar(valor: number) {
        console.log(`A moto empinou por ${valor} segundos`);
    }
}