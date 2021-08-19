import {Laptop } from './laptop'
import { Lenovo} from './lenovo';
import {LenovoX} from './lenovox';

let laptop = new Laptop(21);
laptop.ligarMonitor();
console.log(`o laptop tem ${laptop.tamanhoMonitor}`);



let laptolenovo = new Lenovo(21);
laptolenovo.ligarMonitor();
laptolenovo.aumentarBrilho(10);




let game = new LenovoX(27);
game.memoriaRam = 16 ;
console.log(`o laptop tem ${game.memoriaRam} GB`);

game.ligarMonitor();

