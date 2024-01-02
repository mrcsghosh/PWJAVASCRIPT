const myArray = [1, 2, 3, 4, 5] //Some Array in a code

const myNewArray = new Array(1, 2, 3, 4, 5)//using "New" for add Array

//console.log(myArray[1]);

const dcHeros = ["Batman", "superman", "Hatman", "LG", "Arrow"]
//dcHeros[dcHeros.length] = "wonder Woman"//for Adding a New Array In it
dcHeros.push("Wonder Woman")//there is easy way to Add Array
//console.log(dcHeros.length);
//console.log(dcHeros);
//dcHeros.pop()//There is way to remove the last Array 
//const lastHero = dcHeros.pop()//here we create a lastHreo
//dcHeros.unshift("Aquaman")//here we able to add hero (Array) and print it 
//console.log(dcHeros);

//console.log(typeof myArray.toString()); //there is the  way to change array into string and print datatypeof
//console.log(dcHeros.join("+"));//here we use "join" for print what we want between array
//console.log(typeof dcHeros.toString());//


//SLICE AND SPLICE  
/*IN SLICE NOT INCLUDED LAST NUMBER END NUMBER AND PRINT START NUMBER AND AHEAD OF IT AND ONE MORE THING WHICH IS IT NOT HAVE ANY CHANGE IN THE ARRAY
BUT WHEN
IN SPLICE IS INCLUDED LAST NUMBER END NUMBER AND PRINT ALL WE WRITE NUMBERS AND ONE MORE THING WHICH IS IT ALSO CHANGE IN THE ARRAY WE HAVE ITS PRINT THE VALUE BEFORE REMINDER THAN PRINT SPLICE END NUMBERS
*/
console.log(dcHeros.slice(1,3));//here we use slice Returns a copy of a section of an array.
console.log(dcHeros);
console.log(dcHeros.splice(1,3));//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(dcHeros);
