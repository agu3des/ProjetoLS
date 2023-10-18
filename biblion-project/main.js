
import books from "./model/books.js";

const main = document.querySelector('main');

for (const book of books) {
  main.insertAdjacentHTML('beforeend', createBookView(book));
}

function createBookView(book) {
  return `<div class="flag col-2 my-2 text-center">
    <img src="${book.image}" alt="${book.name}">
    <p>${book.name}</p>
  </div>`;
}
