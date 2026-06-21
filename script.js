const userLibrary = [];

const addButton = document.querySelector(".add-button");

function Book(title, author, numberOfPages) {
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = false;
}

function addBook(title, author, numberOfPages) {
  const book = new Book(title, author, numberOfPages);

  userLibrary.push(book);
}

function showForm() {
  addButton.addEventListener();
}
