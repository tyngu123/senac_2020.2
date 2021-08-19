import { Veiculo } from './Classe/veiculo';
import { Moto } from './Classe/moto';
import { Caminhao } from './Classe/caminhao';


let veiculo = new Veiculo("Vermelho", "Fiat", "Punto");
console.log(`A cor do meu carro é ${veiculo.corVeiculo}, do fabricante ${veiculo.fabricanteVeiculo} o modelo é ${veiculo.modeloVeiculo}.`);

veiculo.acelerarVeiculo();
veiculo.pararVeiculo();


let moto = new Moto("Vermelha", "Honda", "Biz");
moto.acelerarVeiculo();
console.log(`Moto ${moto.empinarMoto()}`);
console.log(`A cor da moto é ${moto.corVeiculo}`);
console.log(`Fabricante da moto é ${moto.fabricanteVeiculo}`);
console.log(`Modelo da moto ${moto.modeloVeiculo}`);
console.log(`Moto ${moto.pararVeiculo()}`);

let caminhao = new Caminhao ("Azul", "VW", "Scania",50);
console.log(`Cor do caminhao é ${caminhao.corVeiculo}, do fabricante ${caminhao.fabricanteVeiculo}, modelo é ${caminhao.modeloVeiculo}, o tamanho da caçamba é de ${caminhao.tamanhoCacamba} Metros.`)
caminhao.descarregarCaminhao();
console.log(`Caminhao ${caminhao.acelerarVeiculo()}`);
console.log(`Caminhão ${caminhao.pararVeiculo()}`);
