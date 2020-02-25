function manipulateStyle(back, front) {
    document.getElementByClassName('bodyStyle').style.backgroundColor = back;
    document.getElementByClassName('bodyStyle').style.color = front;
}

function changeFont(font) {
    document.getElementsByClassName('bodyStyle').font = font;
} 