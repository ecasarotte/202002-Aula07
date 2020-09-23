import { Veiculo } from "./Veiculo";

export class Aviao extends Veiculo {

    constructor(private numeroPassageiros: number, marca: string, modelo: string, placa: string,
        velocidade: number, velocidadeMaxima: number) {
        super(marca, modelo, placa, velocidade, velocidadeMaxima);
    }

    public imprimirDadosAviao(): void {
        this.imprimirDados();
        console.log(`Número de passageiros: ${this.numeroPassageiros} \n`);
    }
}