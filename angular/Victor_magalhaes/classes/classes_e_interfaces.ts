import { LenovoX } from './laptop/lenovox';
import { Lenovo } from './laptop/lenovo';
import{Laptop} from './laptop/laptop';

let computador = new Laptop(14,`Preto`);
computador.ligarMonitor();
computador.deligarMonitor();
console.log(`o tamanho da tela do monitor é ${computador.tela}`);
console.log(`a cor do computador é ${computador.cor}`);



    


let Laptoplenovo = new Lenovo(21,`branco`);
console.log(`a cor desse monitor é ${Laptoplenovo.cor}`)

interface Gamer{
    memoriaRAM:Number;
}

