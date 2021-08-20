import {Veiculo} from "./veiculo";
import { Moto } from "./moto";
import { Caminhao } from "./caminhao";

let carro = new Veiculo ("Azul","2020","Nissan Versa");
carro.acelerarVeiculo(50);
console.log("O carro da ${carro.fabricanteVeiculo} é da cor ${carro.corVeiculo}.");

let moto = new Moto ("Preto","2020","Honda");
carro.acelerarVeiculo(50);
console.log("A moto é da ${carro.fabricanteVeiculo}.");
moto.empinarMoto(6);

let caminhao = new Caminhao ("Cinza","2015","Mercedes",1000);
console.log("O caminhão tem ${caminhao.tamanhoCacamba} litros na caçamba!");
caminhao.descarregarMaterial(40);