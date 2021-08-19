"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(cor, modelo, fabricante) {
        this.cor = cor;
        this.modelo = modelo;
        this.fabricante = fabricante;
    }
    Veiculo.prototype.Acelerar = function () {
        console.log("O veiculo est\u00E1 acelerando");
    };
    Veiculo.prototype.Para = function () {
        console.log("O veiculo est\u00E1 parado");
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
