export class Veiculo {
    modeloVeiculo: number;
    fabricanteVeiculo: string;
    corVeiculo: string;

    constructor(modelo: number, fabricante: string, cor: string) {
        this.modeloVeiculo = modelo;
        this.fabricanteVeiculo = fabricante;
        this.corVeiculo = cor;
    }

    acelerarVeiculo(velocidade: number){
        console.log(`O veiculo está andando há ${velocidade} km/h!`);        
    }

    pararVeiculo(){
        console.log(`O veiculo parou!`);        
    }
}






