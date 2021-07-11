// const newBookCard = document.createElement('div');
// const cardText = document.createElement('p');
const container = document.getElementById('container')

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

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function(){
        return(title + ' by ' + author + ', ' + pages + ' pages. ')
    }
}


function addBookToLibrary(){
    console.log('addBook');
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
        
    newBook = new Book(title, author, pages);
     myLibrary.push(newBook);

}

function checkForDup(libIndex){
    console.log('checkDup');

    // get children of container to see whats on screen // 
    var cardList = container.querySelectorAll('.cardDisplay[data-cardnum]');
    var len = cardList.length
    console.log(cardList);

    // loop through container and check for duplicate ID's in array/container //
    for (i=0; i<len; i++){
        var cardData = cardList[i].getAttribute('data-cardNum');
        cardData = Number(cardData);
        console.log(cardList[i]);
        if (cardData === libIndex){
            console.log('sames')
            deleteCard(cardList[i]);
        }
        else{
        console.log('notSames');
        }
    }
}

function addNewCard(lib){
    console.log(typeof(lib));
    Object.values(lib).forEach((key, index) => {
        const newBookCard = document.createElement('div');
        newBookCard.setAttribute('data-cardNum', index);
        checkForDup(index);

        // create card info and append to container //
        const cardText = document.createElement('p');
        newBookCard.innerHTML = key.title;
        cardText.innerHTML = key.info();
        cardText.id = 'cardtext';
        newBookCard.className = 'cardDisplay';
        newBookCard.id = 'card';
        newBookCard.appendChild(cardText);
        container.appendChild(newBookCard);
        })

    }

bookForm.onsubmit = function(e){
    e.preventDefault();
    addBookToLibrary();
    addNewCard(myLibrary);
}

function deleteCard(index) {
    container.removeChild(index);
}









// const bookDetails = bookForm.elements;
// bookDetails.forEach(function (info, index){
//     console.log(index);
//     console.log(info);
// })
// console.log(bookDetails);

