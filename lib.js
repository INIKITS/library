const container = document.getElementById('container')
const bookForm = document.getElementById('bookForm');
const bookDetails = bookForm.elements;
const myLibrary = []
const submitButton = document.getElementById('submit');
const formButton = document.getElementById('formButton');
const cancelForm = document.getElementById('cancel');
const formContainer = document.getElementById('formContainer');



function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function(){
        return(author + ', ' + pages + ' pages. ')
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
        console.log(cardList[i]);
        cardData = Number(cardData);


        if (cardData === libIndex){
            console.log('sames')
            deleteCard(cardList[i]);
        }
        else{
        console.log('not same ID');
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
        const deleteButton = document.createElement('BUTTON')
        const cardTitle = document.createElement('p');
        const cardText = document.createElement('p');

        deleteButton.id='deleteButton';
        deleteButton.innerHTML = 'X';
        cardTitle.innerHTML = key.title;
        cardText.innerHTML = key.info();
        cardTitle.id = 'cardTitle';
        cardText.id = 'cardText';
        newBookCard.className = 'cardDisplay';
        newBookCard.id = 'card';

        newBookCard.appendChild(deleteButton);
        newBookCard.appendChild(cardTitle);
        newBookCard.appendChild(cardText);
        container.appendChild(newBookCard);


        })

    }

bookForm.onsubmit = function(e){
    e.preventDefault();
    toggleForm();
    addBookToLibrary();
    addNewCard(myLibrary);
}

cancelForm.addEventListener('click', toggleForm);
 
container.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON"){
        debugger;
        console.log(e.target);
        console.log(e.target.parentNode.getAttribute('data-cardNum'));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        var cardToDelete = e.target.parentNode.getAttribute('data-cardNum');

        myLibrary.splice(cardToDelete, 1);
    }
})

function deleteCard(index) {
    console.log(typeof(index), index);
    container.removeChild(index);
}



var formVisible = true;

function toggleForm(){
    formVisible = formVisible ? false : true; 
    if (formVisible){
        bookForm.style.display = 'none';
        formContainer.style.display = 'none';

    }
    else{
        bookForm.style.display = 'flex';
        formContainer.style.display = 'flex';
    }
}

formButton.addEventListener("click", function() {
    console.log('click!');
    toggleForm();
})

