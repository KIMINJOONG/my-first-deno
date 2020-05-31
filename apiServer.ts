import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

interface Book {
  id: string;
  title: string;
  author: string;
}

let books: Book[] = [
  {
    id: "1",
    title: "book one",
    author: "One",
  },
  {
    id: "2",
    title: "book two",
    author: "two",
  },
  {
    id: "3",
    title: "book three",
    author: "Three",
  },
];

router.get("/", (context) => {
  context.response.body = "hello world";
}).get("/books", (context) => {
  context.response.body = books;
}).post("/books", async (context) => {
  const body = await context.request.body();
  if (!context.request.hasBody) {
    context.response.status = 400;
    context.response.body = "데이터가 없습니다.";
  } else {
    const book: Book = body.value;
    book.id = v4.generate();
    books.push(book);
    context.response.status = 201;
    context.response.body = book;
  }
});

console.log(`server is listening on port 5000`);

await app.listen({ port: 5000 });