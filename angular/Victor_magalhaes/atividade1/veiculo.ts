export class Veiculo{
    cor:string
    modelo:string
    fabricante:string
    constructor(cor:string ,modelo:string ,fabricante:string){
        this.cor=cor;
        this.modelo = modelo;
        this.fabricante =fabricante;

    }
      Acelerar(){
          console.log(`O veiculo está acelerando`);
      } 
      Para(){
          console.log(`O veiculo está parado`);
      }   
    }


    
