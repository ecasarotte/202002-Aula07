import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {

    constructor(private porta: number, marca: string, modelo: string, placa: string,
        velocidade: number, velocidadeMaxima: number
    ) {
        super(marca, modelo, placa, velocidade, velocidadeMaxima);
    }

    public imprimirDadosCarro(): void {
        this.imprimirDados();
        console.log(`Porta: ${this.porta}`);
    }
}