/********************      With Simple JavaScript We Do it like That  ****************** */

const students = [
    { id : 1 , name : "John" , lastName : "Doe" , age : 20 , grade : "A"},
    { id : 2 , name : "Jane" , lastName : "Smith" , age : 22 , grade : "B"},
    { id : 3 , name : "Bob" , lastName : "Johnson" , age : 19 , grade : "A"},
    { id : 4 , name : "Hemant" , lastName : "Vijavat" , age : 23 , grade : "B"},
    { id : 5 , name : "Harsh" , lastName : "Chawda" , age : 21 , grade : "A"},
    { id : 6 , name : "Ram" , lastName : "Birle" , age : 21 , grade : "B"}
];

//function for Add Student in a Students Object
function addStudent(id, name, lastName, age, grade) {
    const item = { id, name, lastName, age, grade };
    students.push(item);
};

addStudent(7, "Bharat", "Ghosh", 20, "C");
console.log(students);

//function for update Student Info Using Students id
function updateStudentInfo(id, updateInfo){
    const student = students.find( student =>  student.id === id );
    if (student) {
        Object.assign(student, updateInfo);
    }
};

updateStudentInfo(4, {age : 25, grade : "D"});
console.log(students);


//function for Delete Student Using Students id
function deleteStudent(id){
    const student = students.findIndex( student => student.id === id)
    // if(student !== -1){
    //     students.splice(student);
    // }
    students.splice(student, 1);
};

deleteStudent(3);
console.log(students);


//function for list All Students
function listAllStudent(){
    students.forEach(student => console.log(student));
}

console.log(listAllStudent());


//function for find students by grade
function findStundentByGrade(grade){
 const student = students.filter(student => student.grade === grade);
 return student;
};

console.log(findStundentByGrade('B'));


//function for calculate Average Age using Array Method 
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0)
    return (totalAge/students.length).toFixed(2);
}

console.log(calculateAverageAge());

/***********************  With Advance JavaScript We Do it Like That  ********************** */

const students2 = [
    { id : 1 , name : "John" , lastName : "Doe" , age : 20 , grade : "A"},
    { id : 2 , name : "Jane" , lastName : "Smith" , age : 22 , grade : "B"},
    { id : 3 , name : "Bob" , lastName : "Johnson" , age : 19 , grade : "A"},
    { id : 4 , name : "Hemant" , lastName : "Vijavat" , age : 23 , grade : "B"},
    { id : 5 , name : "Harsh" , lastName : "Chawda" , age : 21 , grade : "A"},
    { id : 6 , name : "Ram" , lastName : "Birle" , age : 21 , grade : "B"}
];


//function for Add Student in a Students Object
function addStudent2(id, name, lastName, age, grade) {
    students2.push({ id, name, lastName, age, grade });
};

// addStudent2(7, "Bharat", "Ghosh", 20, "C");
// console.log(students2);

//function for update Student Info Using Students id
function updateStudentInfo2(id, updateInfo){
    const student = students2.find(({ id: studentId }) => studentId === id);
    if (student) Object.assign(student, updateInfo);
};

// updateStudentInfo2(4, {age : 25, grade : "D"});
// console.log(students2);


//function for Delete Student Using Students id
function deleteStudent2(id){
    stu = students2.filter(student => student.id !== id);
};

// deleteStudent2(3);
// console.log(students2);


//function for list All Students
    const listAllStudents2 = () => students2.forEach(student => console.table(student));


//function for find students by grade
const findStudentsByGrade2 = grade => students2.filter(({ grade: studentGrade }) => studentGrade === grade);



//function for calculate Average Age using Array Method 
const calculateAverageAge2 = () => 
    (students2.reduce((sum, { age }) => sum + age, 0) / students2.length).toFixed(2);


addStudent2(7, "Bharat", "Ghosh", 20, "C");
console.log("After adding Bharat:");
listAllStudents2();

updateStudentInfo2(7, { age: 21, grade: "B" });
console.log("After updating Bharat's age and grade:");
listAllStudents2();

deleteStudent2(2);
console.log("After deleting Jane:");
listAllStudents2();

console.log("Students with grade A:");
console.table(findStudentsByGrade2("A"));

console.log("Average Age of Students:", calculateAverageAge2());
