// JavaScript Objects - Object Creation Functions, Inheritance, Properties, Methods, Instantiation 

var bookArr = [];

function createBook(fName, lName, bName, num){
    console.log("Data received:");
    console.log("Author First Name: " + fName);
    console.log("Author Last Name: " + lName);
    console.log("Book Name: " + bName);
    console.log("ISBN: " + num);
    
    bookArr[bookArr.length] = {
        authorFirst : fName,
        authorLast  : lName,
        bookName    : bName,
        isbn        : num,
        getBkName   : function() {
          return this.bookName;
        },

        getAuthName : function() {
            return this.authorFirst + " " + this.authorLast;
        },

        getIsbn     : function() {
            return this.isbn;
        }
      };

      console.log("Array Length: " + bookArr.length);
    }

function displayBooks() {
  clearBooks();

  for (var i = 0; i < bookArr.length; i++){

    var author = bookArr[i].getAuthName();
    var book = bookArr[i].getBkName();
    var isbn = bookArr[i].getIsbn();

    document.getElementById("authorCol").innerHTML += author + '<br>';
    document.getElementById("bookCol").innerHTML += book + '<br>';
    document.getElementById("isbnCol").innerHTML += isbn + '<br>';
}

}

function clearBooks(){
  document.getElementById("authorCol").innerHTML = '<div class="colTitle">Book Author<br></div><br>';
  document.getElementById("bookCol").innerHTML = '<div class="colTitle">Book Name<br></div><br>';
  document.getElementById("isbnCol").innerHTML = '<div class="colTitle">Book ISBN<br></div><br>';
}
