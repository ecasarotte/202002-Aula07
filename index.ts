import { Aviao } from "./Aviao";
import { Carro } from "./Carro";
import { Veiculo } from "./Veiculo";

let carros: Carro[] = [];

for(let i = 0; i< 10; i++){
    carros.push(new Carro(4, 'Chevrolet', 'Onix', 'ABC-1234', i, 220));
}

const aviao1: Aviao = new Aviao(180, 'TAM', 'boeing-777', 'hhh', 2, 860);
const aviao2: Aviao = new Aviao(180, 'ANTONOV', 'AN-225', 'iii', 2, 920);
const aviao3: Aviao = new Aviao(280, 'GOL', 'boeing-222', 'jjj', 2, 860);
const aviao4: Aviao = new Aviao(280, 'EMBRAER', 'boeing-557', 'ooo', 2, 860);
const aviao5: Aviao = new Aviao(180, 'TAM', 'boeing-777', 'ppp', 2, 1220);

console.log(carros);

aviao1.imprimirDadosAviao();
aviao2.imprimirDadosAviao();
aviao3.imprimirDadosAviao();
aviao4.imprimirDadosAviao();
aviao5.imprimirDadosAviao();

let instanciados = Veiculo.getInstanciados();
console.log(`Número de veículos instanciados: ${instanciados}`);