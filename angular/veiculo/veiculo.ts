export class Veiculo {
corVeiculo: string;
modeloVeiculo: string;
fabricanteVeiculo: string;
tipoVeiculo: string;

constructor(cor:string,modelo:string,fabricante:string,tipo:string) {
    this.corVeiculo = cor;
    this.modeloVeiculo = modelo;
    this.fabricanteVeiculo = fabricante;
    this.modeloVeiculo = modelo;


}

acelerar(velocidade: number) {
    if((velocidade <= 150) || (this.tipoVeiculo != 'Moto')) {
    console.log(`O veículo está se movendo a ${velocidade} km/h!`);
    } else {
        console.log(`O veículo não pode passar de 150km/h`);
    }
}

parar() {

}
}
