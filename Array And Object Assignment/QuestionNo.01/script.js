//1. In this shopping cart We add, remove, and edit items
//Here We Declare the ShoppingCart
const shoppingCart = [ "Milk", "Coffe", "Tea", "Honey"];


shoppingCart.unshift("Meat"); // Here We Add 'Meat' in the beginning of your shopping cart if it has not been already added

console.log("Meat is Adedd :",shoppingCart);

shoppingCart.push("Sugar"); // Here We Add Sugar at the en" of your shopping cart if it has not been already added

console.log("Sugar is Adedd :", shoppingCart);

shoppingCart.splice(4,1)//delete shoppingCart[4];//shoppingCart.shift('Honey');//Here We remove 'Honey' if you are allergic to honey

/*const updatedCart = shoppingCart.filter((item) => item !== "Honey");
console.log(updatedCart);*/
console.log("Honey is Removed :", shoppingCart);

shoppingCart[3] = 'Green Tea';//Here We Replace or Update 'Tea' With 'Green Tea'

/*const updatedCart1 = shoppingCart.map(item => item === 'Tea' ? 'Green Tea' : item);
console.log(updatedCart1);*/

console.log("Tea is Updated :", shoppingCart);


//I use w3school for instruction's;