// Functions
function printHello(name) {
    console.log("Hello " + name);
  };
function printHello("Neeraj");

function adds(a,b) {
    return a+b;
};
adds(3,4)

// Arrow Functions
let printHello = (name) => "Hello " + name
printHello("Neeraj")

let addition = (a,b) => a+b;
addition(4,5)

addition = (a,b) => a+b;
doubleAddition = (a,b) => a=b;) => a+b;
doubleAddition(1,2)

// Function in a Function
addition = (a,b) => a+b;
doubleAddition = (a,b) => addition(a,b)*2;
doubleAddition(1,2)

// ITERATE
// For Loops
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function fri(fri_list) {
    for (var i=0; i < fri_list.length; i++ ) {
    console.log(fri_list[i]);
    }
}
fri(friends);

// Using Arrow Function
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
// fri = (fri_list) => for (var i=0; i < fri_list.length; i++ ){console.log(fri_list[i];};
friends.forEach(i => console.log(i))

// forEach Function
let numbers = [1,2,3,4,5,6,7];
numbers.forEach(function(element){
    console.log(element**2);
})
// OR
numbers.forEach(i => console.log(i**2))

