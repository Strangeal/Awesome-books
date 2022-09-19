// selecting elements
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const submitBtn = document.querySelector('#submit');
const bookList = document.querySelector('#book-list');
const formGroup = document.querySelector('#form-container');
let addOn;
let bookObj = JSON.parse(localStorage.getItem('saveItem')) || [];
