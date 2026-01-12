import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  private bookService = inject(BookService);


}
