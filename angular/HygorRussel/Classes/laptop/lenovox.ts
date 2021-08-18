import { Laptop } from './laptop';
import { Gamer } from '../interface/gamer';

export class LenovoX extends Laptop implements Gamer {
    constructor (tamanho: number) {
        super(tamanho);
    }
    memoriaRAM: number;
}