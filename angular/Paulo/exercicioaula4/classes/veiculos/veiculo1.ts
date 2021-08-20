export class Veiculo1 {
    cor: string;
    fabricante: string;
    modelo: number;

    constructor(modelo1: number) {
        this.modelo = modelo1;
    }

    acelerar() {
        console.log("Carro acelerando");
    }
    parar() {
        console.log("Carro freiando");
    }
}

