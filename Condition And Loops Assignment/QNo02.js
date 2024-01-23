//write a program that graded students based on their marks

let studentMarks = 92;

//if greater than 90 then "A" Grade
if (studentMarks > 90) {
  console.log("Student Grade : A");
} //if between 70 and 90 then a "B"  Grade
else if (studentMarks >= 70 && studentMarks <= 90) {
  console.log("Student Grade : B");
} //if between 50 and 70 then a "C" Grade
else if (studentMarks >= 50 && studentMarks < 70) {
  console.log("Student Grade : C");
} //if less than 50 then a "F" Grade
else {
  console.log("Student Grade : F");
}
