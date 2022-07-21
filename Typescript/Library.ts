import { Book } from  "./Book";
export class Library {
  books: Book[];
  address: string;
  manager: string;

  constructor(books: Book[], address: string, manager: string) {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }

  public setAddress(addr): void {
    this.address = addr;
  }

  public getAddres(): string {
    return this.address;
  }

  public setManager(manag): void {
    this.manager = manag;
  }

  public getManager(): string {
    return this.manager;
  }

  public toString(){
    let salida:string = '';

    for(let i = 0; i < this.books.length; i++){
      salida += this.books[i].toString + '\n'
    }

    return salida;
  }

  public getNumberOfBooks():number{
    return this.books.length
  }

  public findByAuthor(author:string):Book[]{
    return this.books.filter(book => book.author === author)
  }
}