export function BooksCards(books) {
    return `
      <div
        id="book-${books.image}"
        class="bg-white shadow-md rounded-lg p-4"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-700">
            ${books.name}
          </h3>
          <p class="text-sm text-gray-500">
            <span class="font-bold">Preço:</span>
            ${books.value}
          </p>
          <p class="text-sm text-gray-500">
            <span class="font-bold">Editora:</span>
            ${books.editora}
          </p>
        </div>
      </div>
    `;
  };
  