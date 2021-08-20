export class Veiculo {
    corVeiculo: string;
    fabricanteVeiculo: string;
    modeloVeiculo: string;

    constructor(cor: string, fabricante: string, veiculo: string) {
        this.corVeiculo = this.corVeiculo;
        this.fabricanteVeiculo = this.fabricanteVeiculo;
        this.modeloVeiculo = this.modeloVeiculo;
    }

    acelerarVeiculo(velocidade: number) {
        console.log("O veiculo está se movimentando a ${velocidade} km/h");


    }

    pararVeiculo() {
        console.log("O veiculo parou!");
    }
}