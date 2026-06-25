const userLibrary = [];
let valid = false;

const addButton = document.querySelector(".add-button");
const cardContainer = document.querySelector(".card-container");
const addFormModal = document.querySelector("dialog");

function Book(title, author, numberOfPages, isRead) {
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

Book.prototype.changeStatus = function () {
  if (this.isRead === false) {
    this.isRead = true;
  } else {
    this.isRead = false;
  }
};

addButton.addEventListener("click", () => {
  showForm();
});

document.getElementById("bookForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let bookTitle = '';
  let bookAuthor = '';
  let bookPages = '';
  let statusVal = '';

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const pagesCount = document.getElementById('pages').value.trim();
  const status = document.getElementById('status').value;

  if (title === '' || !/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(title)) {
    alert('Please enter a valid title.');
  } else if (author === '' || !/^[a-zA-Z.\s]+$/.test(author)) {
    alert('Please enter a valid name of author.');
  } else if (pagesCount < 0 || pagesCount === '') {
    alert('Please enter a valid number of pages.');
  } else {
    valid = true;
    bookTitle = title;
    bookAuthor = author;
    bookPages = pagesCount;
    statusVal = status === "Unread" ? false : true;

    addFormModal.close();
    addBook(bookTitle, bookAuthor, bookPages, statusVal);
  }
});

function addBook(title, author, numberOfPages, isRead) {
  const book = new Book(title, author, numberOfPages, isRead);

  userLibrary.push(book);
  addBookCard();
}

function showForm() {
  addFormModal.showModal();
}

function addBookCard() {
  cardContainer.textContent = "";

  userLibrary.forEach((item, index) => {
    const card = document.createElement("div");
    const content = document.createElement("div");
    const bookTitle = document.createElement("h1");
    const author = document.createElement("p");
    const pageNumber = document.createElement("p");
    const status = document.createElement("p");
    const buttonsContainer = document.createElement("div");
    const readButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    let statusContent = (card.className = "card");
    content.className = "content";
    buttonsContainer.className = "buttons";

    bookTitle.textContent = item.title;
    author.textContent = `Author: ${item.author}`;
    pageNumber.textContent = `Pages: ${item.numberOfPages}`;
    status.textContent = item.isRead ? `Status: Read` : `Status: Unread`;
    readButton.textContent = item.isRead ? "Unread" : "Read";
    deleteButton.textContent = "Delete";

    cardContainer.appendChild(card);
    card.appendChild(content);
    content.appendChild(bookTitle);
    content.appendChild(author);
    content.appendChild(pageNumber);
    content.appendChild(status);
    content.appendChild(buttonsContainer);
    buttonsContainer.appendChild(readButton);
    buttonsContainer.appendChild(deleteButton);
  });
}

addBookCard();
