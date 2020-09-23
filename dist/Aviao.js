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
exports.Aviao = void 0;
var Veiculo_1 = require("./Veiculo");
var Aviao = /** @class */ (function (_super) {
    __extends(Aviao, _super);
    function Aviao(numeroPassageiros, marca, modelo, placa, velocidade, velocidadeMaxima) {
        var _this = _super.call(this, marca, modelo, placa, velocidade, velocidadeMaxima) || this;
        _this.numeroPassageiros = numeroPassageiros;
        return _this;
    }
    Aviao.prototype.imprimirDadosAviao = function () {
        this.imprimirDados();
        console.log("N\u00FAmero de passageiros: " + this.numeroPassageiros + " \n");
    };
    return Aviao;
}(Veiculo_1.Veiculo));
exports.Aviao = Aviao;
