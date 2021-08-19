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
        console.log("Acelerando");
    };
    Veiculo.prototype.pararVeiculo = function () {
        console.log("Parando");
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
