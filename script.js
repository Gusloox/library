
let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages

    this.info = function () {
        return "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet";
    }
}
const submit = document.querySelector("#submitBook");
submit.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
    //add to library
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    if (title.value === "" || author.value === "" || pages.value === "") {
        alert("Enter all values");
    } else {
        let book = new Book(title.value, author.value, pages.value);
        myLibrary.push(book);

        //add to grid
        const booksGrid = document.querySelector('.table')
        const row = booksGrid.insertRow(0);
        let deleteRow = document.createElement("td");
        let bookTitle = document.createElement("td");
        let bookAuthor = document.createElement("td");
        let bookPages = document.createElement("td");
        let deleteBtn = document.createElement("button");

        bookTitle = row.insertCell();
        bookAuthor = row.insertCell();
        bookPages = row.insertCell();
        deleteRow = row.insertCell();
        deleteBtn.setAttribute("class", "btn btn-danger deleteBtn");
        deleteBtn.setAttribute("onclick", "removeBook(this)")

        deleteBtn.innerText = "Delete";
        deleteRow.appendChild(deleteBtn);
        bookPages.innerText = pages.value;
        bookAuthor.innerText = author.value;
        bookTitle.innerText = title.value;
        booksGrid.appendChild(row);
    }

}

function removeBook(o) {
    var p = o.parentNode.parentNode;
    p.parentNode.removeChild(p);
}
