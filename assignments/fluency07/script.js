
// change CSS class properties using querySelector and querySelectorAll
function manipulateStyle(back, front) {
    var docClass = document.querySelector('.bodyStyle');
    docClass.style.backgroundColor = back;
    docClass.style.color = front;

    console.log(docClass);
}

// change CSS class properties using getElemensByClassName
function changeFont(font) {
    var docClass = document.getElementsByClassName('bodyStyle');
    docClass[0].style.fontFamily = font;
    
    console.log(docClass);
} 

/* getElemensByClassName and querySelectAll create an array of elements,
 * when you need to edit ALL of them, a simple for loop will do the trick.
 *
 * for (var i = 0; i < docClass.length; i++) { ..loop here.. }
 */