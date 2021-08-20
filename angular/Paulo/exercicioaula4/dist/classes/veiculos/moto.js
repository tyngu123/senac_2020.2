"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Moto = void 0;
var veiculo1_1 = require("./veiculo1");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(modelo1) {
        return _super.call(this, modelo1) || this;
    }
    Moto.prototype.empinar = function (valor) {
        console.log("A moto empinou por " + valor + " segundos");
    };
    return Moto;
}(veiculo1_1.Veiculo1));
exports.Moto = Moto;
