function manipulateStyle(back, front) {
    var docClass = document.getElementsByClassName('bodyStyle');
    docClass.style.backgroundColor = back;
    docClass.style.color = front;
}

function changeFont(font) {
    var docClass = document.getElementsByClassName('bodyStyle');
    docClass.style.font = font;
} 