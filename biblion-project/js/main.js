import { books } from './books.js';
import { BooksCards } from './components/BooksCards.js';
 
const booksGrid = document.querySelector('.books');
 
booksGrid.innerHTML = books
  .map((books) => BooksCards(books))
  .join('');