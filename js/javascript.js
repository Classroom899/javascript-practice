// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

for (i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);

}


var car = {
    hasEngine: true,
    numberOfWheels: 4,
    model: "Focus",
    make: "Ford",
};

console.log(car.model);


var property = "age"; // The equal is an assignee 
var Emily = {
    name: "Emily",
    age: 26,
    profession: "Work in progress"
};

// i = 0 is the initial expression
// This loop will execute as long as i is less than 5 is true

// git checkout 01 - basic is what we will be using for our branges 

//git checkout master





// Loop through an array
var fruits = ["banana", "pear", "apple", "cherry", "peach"];

console.log(fruits[2]);

var groceryList = {
    produce: {
        fruits: ["bananas", "cherries", "blueberries",],
        vegetabes: ["turnip", 'carrot', 'spinach'],
    },
    desserts: ['ice cream', 'brownie'],
};

console.log(groceryList.desserts[1]);


// 1. where do I start counting?
// 2. When do I end?
// 3. What do I increment by?

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

// print the following:
//copper, tin, steel, iron
var metals = ['copper', 'silver', 'tin', 'gold', 'steel', 'aluminum', 'iron'];

for (var i = 0; i < metals.length; i = i + 2) {
    console.log(metals[i]);
}


var nums = [2, 4, 6, 8, 10];

//use a loop to print each element in the updated array

for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + 1;
}

for (var i = 0; i < nums.length; i++) {
    console.log(nums);
}

var num = 4

if (num > 3) {
    console.log("The number is greater than 3")
}

if (num > 5) {
    console.log('The number is greater than 3')
}




var name = "Catherine";
var password = "Banana"
if (name.length !== 7) {
    console.log("This is not 7 characters in length");
}

// >. <. ===, !==, >=, or <=:


function playLowHighGame() {

}

var num = 7;
if (num > 10 { })

}
playLowHighGame();


// Returning something from a function and storing it into a variable
function greet() {
    var message = `Hello ${name}`;
    return message;
}
var philMessage = greet("Phil");
var ninaMessage = greet("Nina");
console.log(philMessage);
console.log(ninaMessage);
