export class Book {
  title: string;
  nPages: number;
  isbn: string;
  author: string;
  editorial: string;

  constructor(title:string, nPages:number, isbn:string, author:string, editorial:string) {
    this.title = title;
    this.nPages = nPages;
    this.isbn = isbn;
    this.author = author;
    this.editorial = editorial;
  }

  public setTitle(titulo: string): void {
    this.title = titulo;
  }
  public getTitle(): string {
    return this.title;
  }

  public setNPages(paginas): void {
    this.nPages = paginas;
  }
  public getNPages(): number {
    return this.nPages;
  }

  public setIsbn(ISBN): void {
    this.isbn = ISBN;
  }
  public getIsbn() {
    return this.isbn;
  }

  public setAuthor(auth): void {
    this.author = auth;
  }
  public getAuthor() {
    return this.author;
  }

  public setEditorial(editor): void {
    this.editorial = editor;
  }
  public getEditoial() {
    return this.editorial;
  }

  public toString(): string {
    let salida = `Título - ${this.title}
    Número de paginas - ${this.nPages}
    Author - ${this.author}
    Editorial - ${this.editorial}`;

    return salida;
  }
}