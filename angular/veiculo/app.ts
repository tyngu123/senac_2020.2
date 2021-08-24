import { Veiculo } from './veiculo';
import { Caminhao } from './caminhao';
import { Moto } from './moto';

let motocg = new Veiculo('Azul','2010','Ford','Moto');
motocg.acelerar(160);

let caminhao1 = new Veiculo('Vermelho','2010','Mercedes','Caminhao');
caminhao1.acelerar(150);
