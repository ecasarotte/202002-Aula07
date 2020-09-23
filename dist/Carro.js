"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Carro = void 0;
var Veiculo_1 = require("./Veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(porta, marca, modelo, placa, velocidade, velocidadeMaxima) {
        var _this = _super.call(this, marca, modelo, placa, velocidade, velocidadeMaxima) || this;
        _this.porta = porta;
        return _this;
    }
    Carro.prototype.imprimirDadosCarro = function () {
        this.imprimirDados();
        console.log("Porta: " + this.porta);
    };
    return Carro;
}(Veiculo_1.Veiculo));
exports.Carro = Carro;
