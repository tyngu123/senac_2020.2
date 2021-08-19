import { Veiculo } from "./veiculo";
export class Moto extends Veiculo {

    empinarMoto(tempo: number){
        console.log(`A moto empinou por ${tempo} minutos!`);        
    }
}

