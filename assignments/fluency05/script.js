class Company{
    constructor(name, numEmployees, type){
        this.name = name;
        this.numEmployees = numEmployees;
        this.type = type;
    }
}
var companyCount = 1;
function setRecord (name, numEmployees, type) {
    var companyObject = new Company(name, numEmployees, type);
    localStorage.setItem(companyCount, JSON.stringify(companyObject));
    companyCount++;

}
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

function displayStorage(id) {
    let tempObj = JSON.parse(localStorage.getItem(id));
    console.log(tempObj);
    document.getElementById("pullName").innerHTML += (tempObj.name + "<br>");
    document.getElementById("pullNumEmp").innerHTML += (tempObj.numEmployees + "<br>");
    document.getElementById("pullType").innerHTML += (tempObj.type + "<br>");
}