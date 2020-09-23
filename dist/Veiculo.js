"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    //#endregion
    //#region Construtor
    function Veiculo(marca, modelo, placa, velocidade, velocidadeMaxima) {
        this.placa = '';
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velocidade = velocidade;
        this.velocidadeMaxima = velocidadeMaxima;
        Veiculo.veiculosInstanciados++;
    }
    //#endregion
    //#region Métodos
    Veiculo.prototype.getPlaca = function () {
        return this.placa;
    };
    Veiculo.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Veiculo.prototype.getVelocidadeMaxima = function () {
        return this.velocidadeMaxima;
    };
    Veiculo.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    Veiculo.prototype.setVelocidade = function (velocidade) {
        this.velocidade = velocidade;
    };
    Veiculo.prototype.setVelocidadeMaxima = function (velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima;
    };
    Veiculo.prototype.acelerar = function (velocidade) {
        if (velocidade <= 10) {
            if (this.velocidade <= this.velocidadeMaxima) {
                this.velocidade += velocidade;
                if (this.velocidade > this.velocidadeMaxima) {
                    console.log('O carro já atingiu a velocidade máxima!');
                    this.velocidade = this.velocidadeMaxima;
                }
            }
        }
        else
            console.log('O limite de aceleração é de 10 KM/h');
    };
    Veiculo.prototype.frear = function () {
        return (this.velocidade / 10);
    };
    Veiculo.prototype.imprimirDados = function () {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Placa: " + this.placa);
        console.log("Velocidade atual: " + this.velocidade);
        console.log("Velocidade m\u00E1xima: " + this.velocidadeMaxima);
    };
    Veiculo.getInstanciados = function () {
        return Veiculo.veiculosInstanciados;
    };
    Veiculo.veiculosInstanciados = 0;
    return Veiculo;
}());
exports.Veiculo = Veiculo;
