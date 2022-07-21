import { Vector } from "./Vector";

export class Matrix {
  private elements: Vector[] = [];
  public length: number;

  constructor(n: number, m: number, k: number) {
    for (let i = 0; i < n; i++) {
      let vector = new Vector(m, k);
      this.elements.push(vector);
    }

    this.length = this.elements.length;
  }

  public print(): void {
    console.log(this);
  }

  public add(m1: Matrix): Matrix {
    let matriz_temporal: Matrix = new Matrix(0, 0, 0);
    let elements_temporal: Vector[] = [];

    let elements_m1: Vector[] = m1.getElements();

    for (let i = 0; i < this.length; i++) {
      let vector_correspondiente: Vector = elements_m1[i];
      elements_temporal.push(this.elements[i].add(vector_correspondiente));
    }

    matriz_temporal.setElements(elements_temporal);

    return matriz_temporal;
  }

  public multNumber(n: number): Matrix {
    let matriz_temporal: Matrix = new Matrix(0, 0, 0);
    let elements_temporal: Vector[] = [];

    for (let i = 0; i < this.length; i++) {
      let vector_temporal: Vector = this.elements[i].multNumber(n);
      elements_temporal.push(vector_temporal);
    }

    matriz_temporal.setElements(elements_temporal);

    return matriz_temporal;
  }

  public multSpecial(n: number): Matrix {
    let matriz_temporal: Matrix = new Matrix(0, 0, 0);
    let vector_temporal: Vector = new Vector(0, 0);
    let elements_temporal_matriz: Vector[] = []; //para la matriz
    let elements_temporal_vector: number[] = []; //para el vector

    for (let i = 0; i < this.length; i++) {
      elements_temporal_vector = [];
      
      for (let j = 0; j < this.elements[i].length; j++) {
        let element = this.elements[i].getElements()[j];

        if (element % 2 === 0) {
          element *= n;
        } else {
          element *= n - 1;
        }

        elements_temporal_vector.push(element);
      }

      vector_temporal.setElements(elements_temporal_vector);
      elements_temporal_matriz.push(vector_temporal);
    }
    
    matriz_temporal.setElements(elements_temporal_matriz);

    return matriz_temporal;
  }

  public getElements(): Vector[] {
    return this.elements;
  }
  public setElements(value: Vector[]) {
    this.elements = value;
    this.length = this.elements.length;
  }
}
