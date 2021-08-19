"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(cor, fabricante, modelo) {
        this.corVeiculo = cor;
        this.fabricanteVeiculo = fabricante;
        this.modeloVeiculo = modelo;
    }
    Veiculo.prototype.acelerarVeiculo = function () {
        console.log("O veículo está acelerando!");
    };
    Veiculo.prototype.pararVeiculo = function () {
        console.log("O veículo está parando");
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
