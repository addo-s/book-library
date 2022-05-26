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
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');            
            
            const bookTitle = document.createElement('h2');
            bookTitle.textContent = `Title: ` + book.title;
            bookCard.appendChild(bookTitle);

            const bookAuthor = document.createElement('p');
            bookAuthor.textContent = `Author: ` + book.author;
            bookCard.appendChild(bookAuthor);

            const bookPages = document.createElement('p');
            bookPages.textContent = `Pages: ` + book.pages;
            bookCard.appendChild(bookPages);

            const bookStatus = document.createElement('p');            
            bookStatus.textContent = `Did you read it? - ` + book.read;
            bookCard.appendChild(bookStatus);

            const removeButton = document.createElement('button');
            removeButton.setAttribute('id', 'remove');
            removeButton.textContent = `Remove`;
            bookCard.appendChild(removeButton);

            const toggleButton = document.createElement('button');
            toggleButton.setAttribute('id', 'toggle');
            toggleButton.textContent = `Read?`;
            bookCard.appendChild(toggleButton);         

            container.appendChild(bookCard);
            
            removeButton.addEventListener('click', () => {
                container.removeChild(bookCard);
            }); 

            toggleButton.addEventListener('click', () => {
               if (book.read === 'No') {
                   bookStatus.textContent = 'Did you read it? - Yes';
                   book.read = 'Yes';
               } else if (book.read === 'Yes') {
                   bookStatus.textContent = 'Did you read it? - No';
                   book.read = 'No';
               }
            });
        }        
    });
};



