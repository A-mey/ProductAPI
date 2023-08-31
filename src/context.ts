import { BooksDataSource } from "./books/booksDataSource";

export interface Context {
  dataSources: {
    booksDataSource: BooksDataSource;
  };
}