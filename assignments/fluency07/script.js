function manipulateStyle(back, front) {
    var docClass = document.querySelector('.bodyStyle');
    docClass.style.backgroundColor = back;
    docClass.style.color = front;
}

function changeFont(font) {
    var docClass = document.getElementsByClassName('bodyStyle');
    docClass[0].style.font = font;
} 