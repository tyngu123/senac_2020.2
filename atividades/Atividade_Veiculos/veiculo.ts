export class Veiculo {
    corVeiculo: string;
    fabricanteVeiculo: string;
    modeloVeiculo: string;

    constructor(cor: string, fabricante: string, modelo: string){
        this.corVeiculo = cor;
        this.fabricanteVeiculo = fabricante;
        this.modeloVeiculo = modelo;
    }
    acelerarVeiculo(){
        console.log("O veículo está acelerando!");
    }
    pararVeiculo(){
        console.log("O veículo está parando");
    }
} 

