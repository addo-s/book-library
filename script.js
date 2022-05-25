let library = [];
    

//book constructor
class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

//display form
const form = document.getElementById('form');
const addBtn = document.getElementById('add-book');
addBtn.addEventListener('click', () => {    
    form.style.display = 'block';
});

//add book to array

function addBook(e) {    
    e.preventDefault();
    
    let newBook = new Book(title, author, pages);
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pages = document.getElementById('pages').value;    
    newBook.read = document.querySelector('input[name="radio1"]:checked').value;
    library.push(newBook);

    document.forms[0].reset();
    form.style.display = 'none';    
    showCard();
    
}
const sbmtBtn = document.getElementById('submit-btn');
document.addEventListener('DOMContentLoaded', () => {
    sbmtBtn.addEventListener('click', addBook);    
});


//display array on screen
const container = document.getElementById('container');
function showCard() {
    library.forEach((book, index, array) => { 
        if (index === array.length-1){
            const content = `
                <div class="book-card">
                    <h2>Title: ${book.title}</h5> 
                    <p>Author: ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <p>Did you read it? ${book.read}</p>
                    <button type="button" id="remove">Remove</button>
                    <button type="button" id="read-not-read">Read?</button>
                </div>
                `;
            
            container.innerHTML += content;
        }
    });
}

