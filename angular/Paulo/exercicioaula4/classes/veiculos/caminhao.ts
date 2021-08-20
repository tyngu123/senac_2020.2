import { Veiculo1 } from './veiculo1';
import { Carga } from '../interface/carga';

export class Caminhao extends Veiculo1 implements Carga{
    tamanhoCacamba: number;

    constructor (modelo1: number){
        super(modelo1);
    }

}