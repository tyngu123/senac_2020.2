"use strict";
exports.__esModule = true;
var laptop_1 = require("./laptop");
var lenovo_1 = require("./lenovo");
var lenovox_1 = require("./lenovox");
var laptop = new laptop_1.Laptop(21);
laptop.ligarMonitor();
console.log("o laptop tem " + laptop.tamanhoMonitor);
var laptolenovo = new lenovo_1.Lenovo(21);
laptolenovo.ligarMonitor();
laptolenovo.aumentarBrilho(10);
var game = new lenovox_1.LenovoX(27);
game.memoriaRam = 16;
console.log("o laptop tem " + game.memoriaRam + " GB");
game.ligarMonitor();
