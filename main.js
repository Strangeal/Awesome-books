const bookListEl = document.querySelector('#book-list');
const addBtn = document.querySelector('.btn');
const titleEl = document.querySelector('#title');
const authorEl = document.querySelector('#author');
const form = document.querySelector('.form-container');

const bookList = JSON.parse(localStorage.getItem('storedBooks')) || [];

class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    addBtn.addEventListener('click', () => {
      const title = titleEl.value;
      const author = authorEl.value;
      if (title && author) {
        const addNewBook = {
          title,
          author,
        };
        bookList.push(addNewBook);
        localStorage.setItem('storedBooks', JSON.stringify(bookList));
        this.renderBooks();
        form.reset();
      }
    });
  }

  renderBooks() {
    if (!bookList.length) {
      bookListEl.innerHTML = 'No books added';
    } else {
      let empty = '';
      bookList.forEach((each, index) => {
        empty += `
        <div class="library-book">
        <div class="library-collection">
        <p class="book-title">"${each.title}"</p> 
        <p>by</p>
        <p class="book-author">${each.author}</p>  </div>  
        <button type="button" class="remove-btn" id=${index}>Remove</button>
    </div>`;
      });
      bookListEl.innerHTML = empty;
    }

    const removeBook = () => {
      const removeBtn = [...document.getElementsByClassName('remove-btn')];
      removeBtn.forEach((item) => {
        item.addEventListener('click', (e) => {
          bookList.splice(e.target.id, 1);
          localStorage.setItem('storedBooks', JSON.stringify(bookList));
          this.renderBooks();
        });
      });
    };
    removeBook();
  }
}
const displayBooks = new Library();

displayBooks.addBook();
displayBooks.renderBooks();
// toggleWindow();