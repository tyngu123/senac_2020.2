"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(cor, fabricante, veiculo) {
        this.corVeiculo = this.corVeiculo;
        this.fabricanteVeiculo = this.fabricanteVeiculo;
        this.modeloVeiculo = this.modeloVeiculo;
    }
    Veiculo.prototype.acelerarVeiculo = function (velocidade) {
        console.log("O veiculo está se movimentando a ${velocidade} km/h");
    };
    Veiculo.prototype.pararVeiculo = function () {
        console.log("O veiculo parou!");
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
