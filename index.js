// selecting elements
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const submitBtn = document.querySelector('#submit');
const bookList = document.querySelector('#book-list');
const formGroup = document.querySelector('#form-container');
let addOn;
let bookObj = JSON.parse(localStorage.getItem('saveItem')) || [];

// Add book
function newAdd() {
  addOn = {
    title: titleInput.value,
    author: authorInput.value,
    id: Math.floor(Math.random()*1000000),
  }
  bookObj.push(addOn);
  localStorage.setItem('saveItem', JSON.stringify(bookObj));
}

// Remove
function removeBook(id) {
  bookObj = bookObj.filter(filterObj => filterObj.id !==id);
  localStorage.setItem('saveItem', JSON.stringify(bookObj));
}