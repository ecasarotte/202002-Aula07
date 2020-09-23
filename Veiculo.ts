export class Veiculo {

    //#region Atributos
    public marca: string;
    public modelo: string;
    private placa: string = '';
    private velocidade: number;
    protected velocidadeMaxima: number;
    public static veiculosInstanciados: number = 0;
    //#endregion

    //#region Construtor
    constructor(marca: string, modelo: string, placa: string,
        velocidade: number, velocidadeMaxima: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velocidade = velocidade;
        this.velocidadeMaxima = velocidadeMaxima;

        Veiculo.veiculosInstanciados++;
    }
    //#endregion

    //#region Métodos
    public getPlaca(): string {
        return this.placa;
    }
    public getVelocidade(): number {
        return this.velocidade;
    }
    public getVelocidadeMaxima(): number {
        return this.velocidadeMaxima;
    }

    public setPlaca(placa: string): void {
        this.placa = placa;
    }
    public setVelocidade(velocidade: number): void {
        this.velocidade = velocidade;
    }
    public setVelocidadeMaxima(velocidadeMaxima: number): void {
        this.velocidadeMaxima = velocidadeMaxima;
    }

    public acelerar(velocidade: number): void {

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
    }

    public frear(): number {
        return (this.velocidade / 10);
    }

    public imprimirDados(): void {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Placa: ${this.placa}`);
        console.log(`Velocidade atual: ${this.velocidade}`);
        console.log(`Velocidade máxima: ${this.velocidadeMaxima}`);
    }

    public static getInstanciados(): number {
        return Veiculo.veiculosInstanciados;
    }
    //#endregion
}
