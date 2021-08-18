import { Laptop } from "./laptop/laptop";
import { lenovo } from "./laptop/lenovo";
import { LenovoX } from "./laptop/lenovoX";



let laptop = new Laptop(21);
laptop.ligarMonitor();
console.log(`o laptop tem ${laptop.tamanhoMonitor}`);


let laptoplenovo = new lenovo(21);
laptoplenovo.ligarMonitor();
laptoplenovo.aumentarBrilho(10);


let game = new LenovoX(27);
game.memoriaRAM = 16;
console.log(`O laptop tem ${game.memoriaRAM} GB`);

game.ligarMonitor();