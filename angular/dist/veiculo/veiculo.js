"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(cor, modelo, fabricante, tipo) {
        this.corVeiculo = cor;
        this.modeloVeiculo = modelo;
        this.fabricanteVeiculo = fabricante;
        this.modeloVeiculo = modelo;
    }
    Veiculo.prototype.acelerar = function (velocidade) {
        if ((velocidade <= 150) || (this.tipoVeiculo != 'Moto')) {
            console.log("O ve\u00EDculo est\u00E1 se movendo a " + velocidade + " km/h!");
        }
        else {
            console.log("O ve\u00EDculo n\u00E3o pode passar de 150km/h");
        }
    };
    Veiculo.prototype.parar = function () {
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
