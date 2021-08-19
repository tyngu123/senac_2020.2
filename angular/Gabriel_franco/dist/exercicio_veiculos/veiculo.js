"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(modelo, fabricante, cor) {
        this.modeloVeiculo = modelo;
        this.fabricanteVeiculo = fabricante;
        this.corVeiculo = cor;
    }
    Veiculo.prototype.acelerarVeiculo = function (velocidade) {
        console.log("O veiculo est\u00E1 andando h\u00E1 " + velocidade + " km/h!");
    };
    Veiculo.prototype.pararVeiculo = function () {
        console.log("O veiculo parou!");
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
