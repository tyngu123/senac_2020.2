"use strict";
exports.__esModule = true;
exports.Laptop = void 0;
var Laptop = /** @class */ (function () {
    function Laptop(tamanho) {
        this.tamanhoMonitor = tamanho;
    }
    Laptop.prototype.ligarMonitor = function () {
        console.log("Monitor ligado");
    };
    return Laptop;
}());
exports.Laptop = Laptop;
