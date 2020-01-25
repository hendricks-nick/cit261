// JavaScript Objects - Object Creation Functions, Inheritance, Properties, Methods, Instantiation 

// default class
class Person {
    constructor(first, last, age, gender) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
    }
}

// inherits person
class Student extends Person{
    constructor(first, last, grade, age, gender) {
        super(first, last, age, gender);
        this.grade = grade;
    }

    // getter for profile data
    getProfile(){
        return ("Student <br>" + 
                "Name: " + this.name.first + " " + this.name.last + "<br>" +
                "Grade: " + this.grade + "<br>" +
                "Age: " + this.age + "<br>" +
                "Gender: " + this.gender + "<br><br>");
    }
}

// array of students
var listofStudents = [];

// calls constructor to create object, adds to array.
function createProfile(first, last, grade, age, gender){
    listofStudents.push(new Student(first, last, grade, age, gender));
    console.log("Array: " + listofStudents);
    console.log("Array Length: " + listofStudents.length);
}

// loops through array to call profiles
function requestProfile(){
    // reset div to empty
    document.getElementById("classProfiles").innerHTML = "";

    for (var i = 0; i < listofStudents.length; i++){    
        document.getElementById("classProfiles").innerHTML += listofStudents[i].getProfile();
    }
}
