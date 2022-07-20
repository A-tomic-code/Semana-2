export class Person {
  name: string;
  age: number;

  private address: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public printName():void {
    console.log(this.name);
  }

  public yearOfBirth (currentYear:number):number {return currentYear - this.age}

  public setAddress(address:string) {this.address = address;}

  public getAddress():string {return this.address}

}
