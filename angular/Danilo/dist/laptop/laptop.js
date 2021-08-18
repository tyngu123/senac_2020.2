"use strict";
exports.__esModule = true;
exports.Laptop = void 0;
var Laptop = /** @class */ (function () {
    function Laptop(tela) {
        this.tamanhoMonitor = tela;
    }
    Laptop.prototype.ligarMonitor = function () {
        console.log("O Monitor do laptop foi ligado!");
    };
    return Laptop;
}());
exports.Laptop = Laptop;
