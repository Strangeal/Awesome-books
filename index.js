// Book class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Add books classas
class displayOn {
  static displayBooks() {
    const books = storageStore.getBooks();
    books.forEach((bookAddOn) => displayOn.addToBooks(bookAddOn));
  }
  static addToBooks(bookAddOn) {
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('collection');
    tableDiv.innerHTML = `
    <div class="collection-text">
    <p>"${bookAddOn.title}"</p>
    <p>by</p>
    <p>${bookAddOn.author}</p>
    </div>
    <button type="submit" class="delete">Remove</button>
    `;
    bookList.appendChild(tableDiv);
  }
  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }
  static clearInputFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
