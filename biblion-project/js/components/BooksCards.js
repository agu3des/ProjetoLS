export function BooksCards(books) {
    return `
      <div
        id="book-${books.id}"
        class="bg-white shadow-md rounded-lg p-4"
      >
        <div class="flex justify-between items-center">
          <p><img src="${books.image}" width="100px"></img></p>
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
  
  //Aqui é onde aplica o estilo dos livros na página. Books são os livros cadastrados no documento books.js