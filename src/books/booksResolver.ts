import { Ctx, Query, Resolver, Arg } from "type-graphql";
import { Context } from "../context";
import { Books } from "./books";

@Resolver(Books)
export class BooksResolver {
  @Query(() => [Books])
  async books(@Ctx() context: Context) {
    // The DataSources we set up in app.ts are accessible via the context in our resolvers by using the @Ctx() decorator.
    const startTime = new Date();
    const books = await context.dataSources.booksDataSource.getBooks();
    console.log(
      `todos query took ${new Date().getTime() - startTime.getTime()}ms`
    );
    return books;
  }

  @Query(() => [Books])
  
  async getBookById(@Ctx() context: Context, @Arg("id") id: string) {
    // The DataSources we set up in app.ts are accessible via the context in our resolvers by using the @Ctx() decorator.
    const startTime = new Date();
    const book = await context.dataSources.booksDataSource.getBooksById(id);
    console.log(
      `todos query took ${new Date().getTime() - startTime.getTime()}ms`
    );
    return book;
  }
}