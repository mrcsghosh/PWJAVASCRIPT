const user = {
    username: "mrcs",
    "first Name" : "Cahndra",
    name : "Shekhar",
    email : "mrcs@CSS.com",
    age : 20,
    isAdmin : false,
    isLoggedIn : true,
    tea : ["Lemon", "Ginger", "peach"],
    address : {
        city : "INDORE",
        state : "MP" 
    }

}

const anotheruser = user; //here we have another user when we change in the user we have ti also change in the anotheruser the reason of that is data refference its have
//we have two type of print the log in Objects 
//console.log(user.age);
//console.log(user['age']); //how to target the objects
//console.log(user.address.city);
//console.log(user.tea[1]);
//console.log(user["address"]["state"]);  //how to target the objects

//user.email = "Shekhar@cs.com"//for change in any objects
//user.age = 21
//console.log(user);
//console.log(anotheruser);
//VUT WHEN WE DELETE FROM USER DIDNOT DELETE FROM USER THAT DELETE FROM THE ANOTHERUSER
//delete user.isAdmin;
//console.log(user); //here we know how to delete a objects

//WHEN WE HAVE A OBJECTS UNDER THE ARRAY
const userListFromDatabase = [{}, {}, {}]
//THEN WE WANT TO PRINT KEYS
//console.log(Object.keys(user));
//WHEN WE WANT TO PRINT VALUES
//console.log(Object.values(user));
//WHEN WE WANT TO PRINT ALL OF THIS OBJECTS
console.log(user.hasOwnProperty('keyboard'));
console.log(user.hasOwnProperty('age'));

console.log(Object.entries(user));