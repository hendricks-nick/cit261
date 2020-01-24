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
            return this.bookName;
        },

        getIsbn     : function() {
            return this.isbn;
        }
      };

      console.log("Array Length: " + bookArr.length);
    }
