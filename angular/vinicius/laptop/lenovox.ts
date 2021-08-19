import { Laptop } from './laptop';
import{ Gamer } from '../interface/gamer';

export class LenovoX extends Laptop implements Gamer{
    memoriaRam: number

    constructor(tamanho: number) {
        super(tamanho);
    }
}