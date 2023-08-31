import { RESTDataSource } from "apollo-datasource-rest";
import { Books } from "./books";

export class BooksDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:8000";
  }

  async getBooks(): Promise<Books[]> {
    let data: any = await this.get("/GetProducts");
    console.log(data);
    return data['books']['items'];
  }

  async getBooksById(id: string): Promise<Books[]> {
    let data: any = await this.get("/GetProducts");
    console.log(data['books']['items']);
    let data2 = data['books']['items'].filter((x: any) => x['id'] == id);
    return data2;
  }
}