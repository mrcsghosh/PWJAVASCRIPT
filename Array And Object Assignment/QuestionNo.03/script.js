let student = {
    name : "Ram",
    age : "14",
    class : 9,
    subject : "Pharma",
    };

let obj = Object.preventExtensions(student); //false
let obj1 = Object.preventExtensions(student.age.replace("20")); //true
 
let extensibleStatus = Object.isExtensible(student)
console.log(extensibleStatus);

// let obj3 = Object.(student)
// console.log(obj3);

// console.log(student.entries());



let teacher = {
    subject : "Math",
};

let tea = Object.seal(teacher); //true

let tea1 = Object.seal(teacher.subject.match("Math")); //false

let sealedStatus = Object.isSealed(teacher);
console.log(sealedStatus);



