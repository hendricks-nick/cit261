// JavaScript Objects - Object Creation Functions, Inheritance, Properties, Methods, Instantiation 

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

    get getProfile(){
        return ("Student <br>" + 
                "Name: " + this.name.first + " " + this.name.last + "<br>" +
                "Grade: " + this.grade + "<br>" +
                "Age: " + this.age + "<br>" +
                "Gender: " + this.gender + "<br>");
    }
}

// array of students
var listofStudents = [];

function createProfile(first, last, grade, age, gender){
    student = new Student(first, last, grade, age, gender);
    listofStudents.push(student);
    console.log("Array: " + listofStudents);
    console.log("Array Length: " + listofStudents.length);
}

function requestProfile(){
    document.getElementById("classProfiles").innerHTML += listofStudents[0].getProfile();
}
