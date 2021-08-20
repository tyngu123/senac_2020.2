"use strict";
exports.__esModule = true;
exports.Veiculo1 = void 0;
var Veiculo1 = /** @class */ (function () {
    function Veiculo1(modelo1) {
        this.modelo = modelo1;
    }
    Veiculo1.prototype.acelerar = function () {
        console.log("Carro acelerando");
    };
    Veiculo1.prototype.parar = function () {
        console.log("Carro freiando");
    };
    return Veiculo1;
}());
exports.Veiculo1 = Veiculo1;
