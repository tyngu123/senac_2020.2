import { Veiculo } from "./veiculo";
import { Moto } from "./moto";
import { Caminhao } from "./caminhao";

let carro = new Veiculo (2020, "BMW", "vermelho");
    carro.acelerarVeiculo(100);
    console.log(`O carro da ${carro.fabricanteVeiculo} é da cor ${carro.corVeiculo}.`);
    
let moto = new Moto (2020, "Honda", "vermelho");
    console.log(`A moto é da ${moto.fabricanteVeiculo}.`);
    moto.empinarMoto(10);
    
let caminhao = new Caminhao (2021, 'Mercedes', 'Preto',700);
    console.log(`O caminhão tem ${caminhao.tamanhoCacamba} litros na caçamba!`);
    caminhao.descarregarMaterial(30);
    
