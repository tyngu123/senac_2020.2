var Laptop = /** @class */ (function () {
    function Laptop(tamanho) {
        this.tamanhoMonitor = tamanho;
    }
    Laptop.ligarMonitor = function () {
        throw new Error("Method not implemented.");
    };
    Laptop.prototype.ligarMonitor = function () {
        console.log("Monitor ligado");
    };
    return Laptop;
}());
var laptop = new Laptop(21);
laptop.ligarMonitor();
console.log("o laptop tem " + laptop.tamanhoMonitor);
