export class Vector {
  private elements: number[] = [];

  public length: number;

  constructor(n: number, k: number) {
    for (let i = 0; i < n; i++) {
      this.elements.push(Number((Math.random() * k).toFixed()));
    }

    this.length = this.elements.length;
  }

  public print(): void {
    console.log(this);
  }

  add(v1: Vector): Vector {
    let v: Vector = new Vector(0, 0);

    if (this.length == v1.length) {
      for (let i = 0; i < this.length; i++) {
        v.elements.push(this.elements[i] + v1.elements[i]);
      }
      v.length = v.elements.length;
    }

    return v;
  }

  subs(v1: Vector): Vector {
    let v: Vector = new Vector(0, 0);

    if (this.length == v1.length) {
      for (let i = 0; i < this.length; i++) {
        v.elements.push(this.elements[i] - this.elements[i]);
      }
      v.length = v.elements.length;
    }

    return v;
  }

  mult(v1: Vector): Vector {
    let v: Vector = new Vector(0, 0);

    if (this.length == v1.length) {
      for (let i = 0; i < this.length; i++) {
        v.elements.push(this.elements[i] * this.elements[i]);
      }
      v.length = v.elements.length;
    }

    return v;
  }

  multNumber(n: number): Vector {
    let v: Vector = new Vector(0, 0);

    for (let i = 0; i < this.length; i++) {
      v.elements.push(this.elements[i] * n);
    }
    v.length = v.elements.length;

    return v;
  }

  public getElements(): number[] {
    return this.elements;
  }
  public setElements(value: number[]) {
    this.elements = value;
    this.length = this.elements.length
  }
}
