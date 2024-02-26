const bookObjects = [];

// Book constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.read = false;

}

const addBtn = document.getElementById("addBtn");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const catalogueDisplay = document.querySelector(".book-catalogue");



function createBookDOMElement(bookObj) {
    const card = document.createElement("div");
    card.className = "card";

    const book = document.createElement("div");
    book.className = "book";

    const imgCont = document.createElement("div");
    imgCont.className = "img-container";

    const img = document.createElement("img");
    img.src = "images/default-cover.jpg";

    imgCont.appendChild(img);

    const details = document.createElement("div");
    details.className = "details";

    let textNode = document.createTextNode(bookObj.title);
    const title = document.createElement("p");
    title.className = "title";
    title.appendChild(textNode);

    textNode = document.createTextNode(bookObj.author);
    const author = document.createElement("p");
    author.className = "author";
    author.appendChild(textNode);
    
    textNode = document.createTextNode("Not Read")
    const read = document.createElement("p");
    read.className = "read";
    read.appendChild(textNode);

    details.appendChild(title);
    details.appendChild(author);
    details.appendChild(read);

    book.appendChild(imgCont);
    book.appendChild(details);


    const btnDiv = document.createElement("div");
    btnDiv.className = "btn-container";

    const btn = document.createElement("button");
    btn.textContent = "Mark as Read";
    btn.className = "mark";

    const btn2 = document.createElement("button");
    btn2.textContent = "Delete Book";
    btn2.className = "del";

    btnDiv.appendChild(btn);
    btnDiv.appendChild(btn2);

    card.appendChild(book);
    card.appendChild(btnDiv);

    return card;
}

function updateCatalogueDisplay() {
    catalogueDisplay.innerHTML = "";
    for (let book of bookObjects) {
        let domElem = createBookDOMElement(book);
        catalogueDisplay.appendChild(domElem);
    }   
}

function addBookToArray() {
    var title = titleInput.value;
    var author = authorInput.value;

    var book = new Book(title, author);
    bookObjects.push(book);

    titleInput.value = "";
    authorInput.value = "";

    let domElem = createBookDOMElement(book);

    let mark = domElem.querySelector(".mark");
    mark.addEventListener("click", function() {
        console.log("Toggle Read");
        toggleRead(domElem, book);
    })

    let del = domElem.querySelector(".del");
    del.addEventListener("click", function() {
        console.log("Delete");
        deleteBook(domElem, book);
    })

    catalogueDisplay.appendChild(domElem);
}

function deleteBook(domElem, bookObj) {
    catalogueDisplay.removeChild(domElem);
    bookObjects.splice(bookObjects.indexOf(bookObj), 1);
}

function toggleRead(domElem, bookObj) {
    let readDisplay = domElem.querySelector(".read");
    let markBtn = domElem.querySelector(".mark");
    
    if (bookObj.read === true) {
        bookObj.read = false;
        readDisplay.textContent = "Not Read";
        markBtn.textContent = "Mark as Read";
    }
    else {
        bookObj.read = true;
        readDisplay.textContent = "Finished Reading";
        markBtn.textContent = "Mark as Unread";
    }
}


addBtn.addEventListener("click", addBookToArray);