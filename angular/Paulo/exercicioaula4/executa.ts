import { Caminhao } from './classes/veiculos/caminhao';
import { Moto } from './classes/veiculos/moto';
import { Veiculo1 } from './classes/veiculos/veiculo1';

let veiculo1 = new Veiculo1(556);
veiculo1.acelerar();
veiculo1.parar();
console.log(`O modelo do carro é: ${veiculo1.modelo}`);

let moto = new Moto(60);
moto.empinar(30);

let descarga = new Caminhao(27);
descarga.tamanhoCacamba = 16;
console.log(`O caminhão descarregou  ${descarga.tamanhoCacamba} KG`);