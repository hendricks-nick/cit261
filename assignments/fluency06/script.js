/*
Create buttons will create and append the element to their respective column.
dupRow will give each row a button the option to insertBefore with a different count
*/
btnNum = 1;

// Create buttons
function createButton() {
    var btn = document.createElement('BUTTON');   // Create a <button> element
    btn.innerHTML = 'Button #' + btnNum + 'Insert Before <br>';                   // Insert text
    btn.setAttribute('id',('btn' + btnNum))
    btn.setAttribute('value', btnNum);
    btn.setAttribute('onclick', 'dupeBtn(this)');
    document.getElementById('btnColumn').appendChild(btn); 
    
    btnNum++;
}

// Global to keep track of num of paragraphs for dynamic text
var parNum = 1;

// Create paragraph
function createParagraph() {
    var para = document.createElement("P");
    para.innerText = "This is paragraph number" + parNum;               
    document.getElementById('parColumn').appendChild(para); 

    parNum++;
}

// Create text box
function createText() {
    var text = document.createElement("input");
    text.type = 'text';
    document.getElementById('textColumn').appendChild(text);
}

// Duplicate Button (insertBefore)
function dupeBtn(btnObj) {
    console.log(btnObj);
    console.log(btnObj.id);

    var btn = document.createElement('BUTTON');   // Create a <button> element
    btn.innerHTML = 'Button # ' + btnNum + 'Insert Before';                   // Insert text
    btn.setAttribute('id',('btn' + btnNum))
    btn.setAttribute('value', btnNum);
    btn.setAttribute('onclick', 'dupeBtn(this)');

    let parentDiv = document.getElementById(btnObj.id).parentNode;
    let currentDiv = document.getElementById(btnObj.id);

    parentDiv.insertBefore(btn, currentDiv);
}