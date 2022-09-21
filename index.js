// Add books classas
class DisplayOn {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static displayBooks() {
    const books = DisplayOn.getBooks();

    books.forEach((bookAddOn) => DisplayOn.addToBooks(bookAddOn));
  }

  static addToBooks(bookAddOn) {
    const bookList = document.querySelector('#book-list');
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
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearInputFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  // Store class local storage
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static saveBooks(book) {
    const books = DisplayOn.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBooks(title) {
    const bookList = document.querySelector('#book-list');
    let books = DisplayOn.getBooks();
    const newBookObj = books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(newBookObj));
    bookList.textContent = '';
    books = DisplayOn.getBooks();
    books.forEach((each) => {
      DisplayOn.addToBooks(each);
    });
  }
}

// display books
document.addEventListener('DOMContentLoaded', DisplayOn.displayBooks);

// Add book to list
const formGroup = document.querySelector('#form-container');
formGroup.addEventListener('submit', (e) => {
  // Prevent default
  e.preventDefault();

  // Get form values
  const titleInput = document.querySelector('#title').value;
  const authorInput = document.querySelector('#author').value;

  // instatiate || take input values
  const newAdd = new DisplayOn(titleInput, authorInput);
  const bookList = document.querySelector('#book-list');

  // Add book to local Storage
  DisplayOn.saveBooks(newAdd);
  bookList.textContent = '';
  const books = DisplayOn.getBooks();
  books.forEach((each) => {
    DisplayOn.addToBooks(each);
  });
  //  clear input fields
  DisplayOn.clearInputFields();
});
const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', (e) => {
  // Remove book from local storage
  const collection = e.target.parentElement;
  const collectionText = collection.querySelector('.collection-text');
  const fetchTitle = collectionText.children[0].textContent.split('"')[1];
  DisplayOn.removeBooks(fetchTitle);
});
