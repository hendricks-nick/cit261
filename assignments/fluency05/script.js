class Company{
    constructor(name, numEmployees, type){
        this.name = name;
        this.numEmployees = numEmployees;
        this.type = type;
    }
}
// Globabl count to keep track of records
var companyCount = 1;

// Creates Object and addsto local storage
function setRecord (name, numEmployees, type) {
    let companyObject = new Company(name, numEmployees, type);
    localStorage.setItem(companyCount, JSON.stringify(companyObject));
    companyCount++;
}

// Checks for record pull, invalid ID shows error
function getRecord(id) {
    // clear displayColumn
    document.getElementById("pullName").innerHTML = "";
    document.getElementById("pullNumEmp").innerHTML = "";
    document.getElementById("pullType").innerHTML = "";

    if (id === '0') {
        // pull all data from local storage
        for (var i = 1; i <= companyCount; i++) {
            displayStorage(i);
        }
    }
    // no record with that id
    else if (id > companyCount - 1){
        document.getElementById("pullName").innerHTML = "Invalid ID Number";
    }
    else {
        displayStorage(id);
    }
}

// displays record
function displayStorage(id) {
    let tempObj = JSON.parse(localStorage.getItem(id));
    console.log(tempObj);
    document.getElementById("pullName").innerHTML += (tempObj.name + "<br>");
    document.getElementById("pullNumEmp").innerHTML += (tempObj.numEmployees + "<br>");
    document.getElementById("pullType").innerHTML += (tempObj.type + "<br>");
}