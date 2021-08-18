import{ Laptop} from './laptop/laptop';
import{ Lenovo} from './laptop/lenovo';
import{ LenovoX} from './laptop/lenovox';


let computador = new Laptop(14);
computador.ligarMonitor();
console.log(`O computador tem ${computador.tamanhoMonitor} polegadas!`);

let laptoplenovo = new Lenovo(21);
laptoplenovo.ligarMonitor();
laptoplenovo.aumentarBrilho(10);

let game = new LenovoX(27);

game.ligarMonitor();
game.memoriaRAM = 16;
console.log(`O computador tem ${game.memoriaRAM}GB`);



