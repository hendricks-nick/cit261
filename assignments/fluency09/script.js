function changeDiv(divObj) {
    document.getElementById(divObj.id).style.backgroundColor = 'red';
}

function changeBack() {
    document.body.style.backgroundColor = 'cyan';

}

function changeDrop(dropObj) {
    document.getElementById(dropObj.id).style.backgroundColor = dropObj.value;

}