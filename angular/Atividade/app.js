"use strict";
exports.__esModule = true;
var veiculo_1 = require("./Classe/veiculo");
var moto_1 = require("./Classe/moto");
var caminhao_1 = require("./Classe/caminhao");
var veiculo = new veiculo_1.Veiculo("Vermelho", "Fiat", "Punto");
console.log("A cor do meu carro \u00E9 " + veiculo.corVeiculo + ", do fabricante " + veiculo.fabricanteVeiculo + " o modelo \u00E9 " + veiculo.modeloVeiculo + ".");
veiculo.acelerarVeiculo();
veiculo.pararVeiculo();
var moto = new moto_1.Moto("Vermelha", "Honda", "Biz");
moto.acelerarVeiculo();
{
    console.log("Moto acelerando");
}
console.log("Moto " + moto.empinarMoto());
console.log("A cor da moto \u00E9 " + moto.corVeiculo);
console.log("Fabricante da moto \u00E9 " + moto.fabricanteVeiculo);
console.log("Modelo da moto " + moto.modeloVeiculo);
console.log("Moto " + moto.pararVeiculo());
var caminhao = new caminhao_1.Caminhao("Azul", "VW", "Scania", 50);
console.log("Cor do caminhao \u00E9 " + caminhao.corVeiculo + ", do fabricante " + caminhao.fabricanteVeiculo + ", modelo \u00E9 " + caminhao.modeloVeiculo + ", o tamanho da ca\u00E7amba \u00E9 de " + caminhao.tamanhoCacamba + " Metros.");
caminhao.descarregarCaminhao();
console.log("Caminhao " + caminhao.acelerarVeiculo());
console.log("Caminh\u00E3o " + caminhao.pararVeiculo());
