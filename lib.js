// const newBookCard = document.createElement('div');
// const cardText = document.createElement('p');
// const container = document.getElementById('container')
// for (i=0; i<2; i++){
//     newBookCard;
//     cardText;
//     newBookCard.innerHTML = 'womp';
//     cardText.innerHTML = 'wompwomp';
//     document.container.appendChild(newBookCard)
//     document.container.appendChild(cardText);
// }
const bookForm = document.getElementById('bookinfo');
const bookDetails = bookForm.elements;
const myLibrary = []
var submitButton = document.getElementById('submit');

function book(){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
}

book.prototype.info = function(){
    return(title + ' by ' + author + ', ' + pages + ' pages. ' + read)
}


function addBookToLibrary(){
        // e.preventDefault();
        var data = new FormData(bookForm);
        for (const [name,value] of data) {
            console.log(name,value)
            myLibrary.push(name,value);
        }
}

bookForm.addEventListener('submit', addBookToLibrary(bookForm))
console.log(myLibrary);







// const bookDetails = bookForm.elements;
// bookDetails.forEach(function (info, index){
//     console.log(index);
//     console.log(info);
// })
// console.log(bookDetails);

