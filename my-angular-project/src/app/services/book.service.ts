
import { Book, DefaultBook } from "../models/book.model"
import { DestroyRef, Injectable, computed, effect, inject, signal } from "@angular/core";
import { httpResource } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class BookService {
    private destroyRef = inject (DestroyRef);
    private baseUrl='http://localhost:3000/api/book';

selectBook(id: number): void {
   console.log ("BookService: selecting book", id)
   this.bookId.set(id);
}

booksResource = httpResource<Book[]> (
   () => {
      const id = this.bookId();
      console.log ("GET bookId", this.bookId());
      return { url: `${this.baseUrl}/${id}`};
   }, {
    defaultValue: [],
    parse: (val: unknown) => {
      console.log('val', val);
      const books  = val as Book[];
      return books;
   }         
});

bookResource = httpResource<Book> (
   () => {
      const id = this.bookId();
      console.log ("GET bookId", this.bookId());
      return { url: `${this.baseUrl}/${id}`};
   }, {
    defaultValue: DefaultBook,
    parse: (val: unknown) => {
      console.log('val', val);
      const book = val as Book;   // this is what fixes the return value.
      return book;
   }
});

books = computed(() => this.bookResource.value());

bookId = signal<number>(1);


//Data comes back like this:
// {
//   "selectedFruit": "1",
//   "data": {
//     "name": "apple",
//     "color": "red"
//   }
// }


constructor() {

   effect(() => {
      console.log ('bookService book', this.bookResource.value());
   })
}
}