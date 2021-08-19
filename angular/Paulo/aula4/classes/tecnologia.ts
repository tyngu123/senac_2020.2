import { Laptop } from './laptop/laptop';
import { Lenovo } from './laptop/lenovo';
import { LenovoX } from './laptop/lenovox';

let laptop = new Laptop(21);
laptop.ligarMonitor();
console.log(`O laptop tem ${laptop.tamanhoMonitor}`);


let laptoplenovo = new Lenovo(21);
laptoplenovo.ligarMonitor();
laptoplenovo.aumentarBrilho(10);


let game = new LenovoX(27);
game.memoriaRAM = 16;
console.log(`O laptop tem ${game.memoriaRAM} GB`);

game.ligarMonitor();