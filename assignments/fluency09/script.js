// 
function changeDiv(divObj) {
    document.getElementById(divObj.id).style.backgroundColor = 'red';
}

// used for onload 
function changeBack() {
    document.body.style.backgroundColor = 'cyan';

}

// used for select input
function changeDrop(dropObj) {
    document.getElementById(dropObj.id).style.backgroundColor = dropObj.value;

}