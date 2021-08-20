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
exports.Caminhao = void 0;
var veiculo_1 = require("./veiculo");
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao(modelo, fabricante, cor, cacamba) {
        var _this = _super.call(this, modelo, fabricante, cor) || this;
        _this.tamanhoCacamba = cacamba;
        return _this;
    }
    Caminhao.prototype.descarregarMaterial = function (quantidade) {
        console.log("O caminhão fez a descarga de ${quantidade} kilos de tijolos!");
    };
    return Caminhao;
}(veiculo_1.Veiculo));
exports.Caminhao = Caminhao;
