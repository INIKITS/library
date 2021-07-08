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
    console.log(libIndex);
    console.log('checkDup');
    var cardList = document.querySelectorAll('card');

    console.log(cardList);
    // for (i=0, len = cardList.length; i<len; i++){
    //     console.log(cardList[i]);
    //     if (cardlist[i] == libIndex){
    //         console.log('sames')
    //     }
    //     console.log('notSames');
    // }
}
function addNewCard(lib){
    console.log(typeof(lib));
    var counter = 0;
    Object.values(lib).forEach((key, index) => {
        console.log(index);
        
        const newBookCard = document.createElement('div');
        newBookCard.setAttribute('data-cardNum', index);
        var cardDataNum = newBookCard.getAttribute('data-cardNum');
        checkForDup(index);
        // var cardValue = document.querySelectorAll('card').value;
        // var cardList = document.querySelectorAll('data-cardNum');
        // console.log(cardList.entries());
        console.log(cardDataNum);
        const cardText = document.createElement('p');
        
        newBookCard.innerHTML = key.title;
        cardText.innerHTML = key.info();
        cardText.id = 'cardtext';
        newBookCard.className = 'WHEEEWWWWW';
        newBookCard.id = 'card';
        newBookCard.appendChild(cardText);
        container.appendChild(newBookCard);
        counter++;
        })

    }




bookForm.onsubmit = function(e){
    e.preventDefault();
    addBookToLibrary();
    addNewCard(myLibrary);
}








// const bookDetails = bookForm.elements;
// bookDetails.forEach(function (info, index){
//     console.log(index);
//     console.log(info);
// })
// console.log(bookDetails);

