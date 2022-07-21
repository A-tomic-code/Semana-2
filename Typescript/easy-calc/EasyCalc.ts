
//enum Formato {Binario, Hexadecimal, Ascii, Cientifico};

export class EasyCalc {
  
  private static ultResultado: number ;
  private static historial: number[];
  private static formatos:{};

  public constructor(ultRes: number = 0) {
      EasyCalc.ultResultado = ultRes;
      EasyCalc.historial = [];
      EasyCalc.formatos = {};
  }

  // si cambia resultado ---> cambia historial y formatos

  ///////////////////////////////////////
  //          Funciones de la          //
  //               clase               //
  ///////////////////////////////////////

  private static actualizarHistorial(hist: number[], value) {
    hist.push(value);
    EasyCalc.setHistorial(hist);
  }

  private static actualizarFormatos(value:number):void {
    
    let formatos = {
      bin: EasyCalc.binario(value),
      hex: EasyCalc.hex(value),
      ascii: EasyCalc.ASCII(value),
      notCientif: EasyCalc.notacionCientifica(value)
    };

    EasyCalc.setFormatos(formatos);
  }


  private static binario(number: number): number {
    return Number(number.toString(2));
  }
  private static hex(number: number): number {
    return Number(number.toString(16));
  }
  private static ASCII(number: number): number[] {
    let resultado:number[] = [];
    let string = number.toString();

    for(let i = 0; i < string.length; i++){
      resultado.push(string.charCodeAt(i))
    }

    return resultado;
  }

  private static notacionCientifica(num:number):number{
    return Number(num.toExponential());
  }

  ///////////////////////////////////////
  //          Getter y Setter          //
  ///////////////////////////////////////

  public static getFormatos(): {} {
    return this.formatos;
  }
  public static setFormatos(value: {}):void {
    EasyCalc.formatos  = value
  }

  public static getHistorial(): number[] {
    return this.historial;
  }
  public static setHistorial(value: number[]) {
    this.historial = value;
  }

  public static getUltResultado(): number {
    return this.ultResultado;
  }
  public static setUltResultado(value: number) {
    EasyCalc.ultResultado = value;
    EasyCalc.actualizarHistorial(EasyCalc.getHistorial(), value);
    EasyCalc.actualizarFormatos(value);
  }

  ///////////////////////////////////////
  //      Funciones calculadora        //
  ///////////////////////////////////////

  public static sum(data: number[]): void {
    this.setUltResultado(data[0] + data[1]);
  }
  public static subs(data: number[]): void {
    this.setUltResultado(data[0] + data[1]);
  }

  public static mult(data: number[]): void {
    this.setUltResultado(data[0] + data[1]);
  }

  public static div(data: number[]): void {
    let resultado: number;

    if (data[1] != 0) {
      resultado = data[0] / data[1];
    } else {
      throw new Error("No se puede dividir entre 0");
    }

    this.setUltResultado(resultado);
  }
}