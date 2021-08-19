"use strict";
exports.__esModule = true;
var veiculo_1 = require("./veiculo");
var moto_1 = require("./moto");
var caminhao_1 = require("./caminhao");
var carro = new veiculo_1.Veiculo(2020, "BMW", "vermelho");
carro.acelerarVeiculo(100);
console.log("O carro da " + carro.fabricanteVeiculo + " \u00E9 da cor " + carro.corVeiculo + ".");
var moto = new moto_1.Moto(2020, "Honda", "vermelho");
console.log("A moto \u00E9 da " + moto.fabricanteVeiculo + ".");
moto.empinarMoto(10);
var caminhao = new caminhao_1.Caminhao(2021, 'Mercedes', 'Preto', 700);
console.log("O caminh\u00E3o tem " + caminhao.tamanhoCacamba + " litros na ca\u00E7amba!");
caminhao.descarregarMaterial(30);