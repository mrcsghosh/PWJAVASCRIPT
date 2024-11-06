const student = {
    name : "Alice",
    age : 22,
    major : "Computer Science",
    GPA : 3.8,
    isEnrolled : true
};

//function for displaying properties and its values of student Object
function displayStudentInfo(student){
   for(let property in student){
    console.log(`${property} : ${student[property]}`);
    
   }
};

console.log(displayStudentInfo(student));   