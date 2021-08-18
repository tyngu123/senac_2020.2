"use strict";
exports.__esModule = true;
exports.Laptop = void 0;
var Laptop = /** @class */ (function () {
    function Laptop(tela, cor) {
        this.tela = tela;
        this.cor = cor;
    }
    Laptop.prototype.ligarMonitor = function () {
        console.log("o monitor foi ligador!");
    };
    Laptop.prototype.deligarMonitor = function () {
        console.log("o monitor foi desligado");
    };
    return Laptop;
}());
exports.Laptop = Laptop;
