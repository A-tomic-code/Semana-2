import * as changeCase from "change-case";

class Converter {
  sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  public toCamelCase(sentence: string): string {
    return changeCase.camelCase(sentence);
  }

  public toPascalCase(sentence: string): string {
    return changeCase.pascalCase(sentence);
  }

  public toSnakeCase(sentence: string): string {
    return changeCase.snakeCase(sentence);
  }

}
