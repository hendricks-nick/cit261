/*
Create buttons will create and append the element to their respective column.
dupRow will give each row a button the option to insertBefore with a different count
*/
btnNum = 1;

// Create buttons
function createButton() {
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "Button #" + btnNum + "Insert Before </br>";                   // Insert text
    document.getElementById("btnColumn").appendChild(btn); 
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

}

// Delete Row
function deleteRow(id) {

}

// Duplicate Row (insertBefore)
function dupeRow(row) {

}