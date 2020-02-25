function manipulateStyle(back, front) {
    let docClass = document.getElementsByClassName('bodyStyle');
    docClass.style.backgroundColor = back;
    docClass.style.color = front;
}

function changeFont(font) {
    let docClass = document.getElementsByClassName('bodyStyle');
    docClass.style.font = font;
} 