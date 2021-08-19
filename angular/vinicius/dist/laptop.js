var Laptop = /** @class */ (function () {
    function Laptop(tamanho) {
        this.tamanhoMonitor = tamanho;
    }
    Laptop.prototype.ligarMonitor = function () {
        console.log("Monitor ligado");
    };
    return Laptop;
}());
