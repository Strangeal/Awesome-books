// selecting elements
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
// const submitBtn = document.querySelector('#submit');
const bookList = document.querySelector('#book-list');
const formGroup = document.querySelector('#form-container');
let addOn;
let bookObj = JSON.parse(localStorage.getItem('saveItem')) || [];

// Add book
function newAdd() {
  addOn = {
    title: titleInput.value,
    author: authorInput.value,
    id: Math.floor(Math.random() * 1000000),
  };
  bookObj.push(addOn);
  localStorage.setItem('saveItem', JSON.stringify(bookObj));
}

// Remove
function removeBook(id) {
  bookObj = bookObj.filter((filterObj) => filterObj.id !== id);
  localStorage.setItem('saveItem', JSON.stringify(bookObj));
}

// Create Books
function addBooks(addOn) {
  const tableDiv = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const authorName = document.createElement('h3');
  const removeBtn = document.createElement('button');
  const line = document.createElement('hr');
  bookTitle.innerText = addOn.title;
  authorName.innerText = addOn.author;
  removeBtn.innerText = 'Remove';
  tableDiv.append(bookTitle, authorName, removeBtn, line);
  bookList.appendChild(tableDiv);
  removeBtn.addEventListener('click', () => {
    removeBtn.parentElement.remove();
    removeBook(addOn.id);
  });
}
bookObj.forEach(addBooks);

formGroup.addEventListener('submit', (e) => {
  e.preventDefault();
  if (titleInput.value !== '' && authorInput.value !== '') {
    newAdd();
    addBooks(addOn);
    formGroup.reset();
  } else {
    alert('Please add a book');
  }
});