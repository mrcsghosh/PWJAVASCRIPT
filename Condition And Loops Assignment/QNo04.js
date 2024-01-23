//generate number between given two numbers
const Num1 = 10 //let first number is 10
const Num2 = 25// let second number is 25

for (let Num = Num1; Num < Num2; Num = Num + 1) { //let Num = Num1 and highrst value of Num < Num2 
    if (Num == 10) { // when Value of Num == 10 Skip 10 and continue print the Rest Values
        continue;
    }
    console.log("Numbers Between 10 and 25 is", Num);// print a Formate and Then value of Num
}