"use strict";
exports.__esModule = true;
var lenovo_1 = require("./laptop/lenovo");
var laptop_1 = require("./laptop/laptop");
var computador = new laptop_1.Laptop(14, "Preto");
computador.ligarMonitor();
computador.deligarMonitor();
console.log("o tamanho da tela do monitor \u00E9 " + computador.tela);
console.log("a cor do computador \u00E9 " + computador.cor);
var Laptoplenovo = new lenovo_1.Lenovo(21, "branco");
console.log("a cor desse monitor \u00E9 " + Laptoplenovo.cor);
