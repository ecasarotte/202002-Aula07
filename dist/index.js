"use strict";
exports.__esModule = true;
var Aviao_1 = require("./Aviao");
var Carro_1 = require("./Carro");
var Veiculo_1 = require("./Veiculo");
var carros = [];
for (var i = 0; i < 10; i++) {
    carros.push(new Carro_1.Carro(4, 'Chevrolet', 'Onix', 'ABC-1234', i, 220));
}
var aviao1 = new Aviao_1.Aviao(180, 'TAM', 'boeing-777', 'hhh', 2, 860);
var aviao2 = new Aviao_1.Aviao(180, 'ANTONOV', 'AN-225', 'iii', 2, 920);
var aviao3 = new Aviao_1.Aviao(280, 'GOL', 'boeing-222', 'jjj', 2, 860);
var aviao4 = new Aviao_1.Aviao(280, 'EMBRAER', 'boeing-557', 'ooo', 2, 860);
var aviao5 = new Aviao_1.Aviao(180, 'TAM', 'boeing-777', 'ppp', 2, 1220);
console.log(carros);
aviao1.imprimirDadosAviao();
aviao2.imprimirDadosAviao();
aviao3.imprimirDadosAviao();
aviao4.imprimirDadosAviao();
aviao5.imprimirDadosAviao();
var instanciados = Veiculo_1.Veiculo.getInstanciados();
console.log("N\u00FAmero de ve\u00EDculos instanciados: " + instanciados);
