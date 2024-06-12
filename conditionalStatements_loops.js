//Exercise 1: Temperature Check
let temperature = 28;
if(temperature < 0){
    console.log("It's freezing")
} else if(temperature <= 15){
    console.log("It's cold")
} else if(temperature <= 25){
    console.log("It's mild")
} else{ 
    console.log("It's warm")
} 

let temp = 18;
let message;
switch (true) {
    case temp < 0:
        message = "It's freezing";
        break;
    case temp > 0 && temp <= 15:
        message = "It's cold";
        break;
    case temp > 15 && temp <= 25:
        message = "It's mild";
        break;
    default:
        message = "It's warm";
        break;            
}
console.log(message);

//Exercise 2: Divisibility Check
let number = 30;
if(number % 2 == 0 && number % 3 == 0){
    console.log("Divisible by both")
} else if(number % 2 == 0 && number % 3 !==0){
    console.log("Divisible by 2")
} else if(number % 2 !== 0 && number % 3 == 0){
    console.log("Divisible by 3")
} else{
    console.log("Not divisible by either")
}

let num = 470;
let text;
switch (true){
    case num % 2 == 0 && number % 3 == 0:
        text = "Divisible by both";
        break;
    case num % 2 == 0 && number % 3 !== 0:
        text = "Divisible by 2";
        break;
    case num % 2 !== 0 && number % 3 == 0:
        text = "Divisible by 3";
        break;
    default:
        text = "Not divisible by either";
        break;
}

//Exercise 3: For loops
for (let i = 1; i <= 10; i++){
    console.log(i)
}

for (let i = 1; i <= 20; i ++){
    if (i % 2 == 0) console.log(i);
}

let total = 0;
for (let i = 1; i <= 100; i++){
    total += i;
}
console.log("The sum of all the numbers from 1 to 100 is: " + total);

const numbers = [1,2,3,4,5];
for (let i = 0; i < numbers.length; i ++){
    console.log(numbers[i]);
}

let largestNumber = 0;
const numbers2 = [3,7,2,5,10,6];
for (let i = 0; i < numbers2.length; i ++){
    if ( numbers2[i] > largestNumber) largestNumber = numbers2[i];
}
console.log("The largest Number in the array is: " + largestNumber);

//Exercise 4: While loops
let p = 1;
while (p <= 10) {
    console.log(p);
    p ++;
}

let z = 1;
while (z <= 20) {
    if (z % 2 == 0) console.log(z);
    z ++;
}

let s = 1;
let whileSum = 0;
while (s <= 100) {
    whileSum += s;
    s ++;
}
console.log("The sum of all the numbers from 1 to 100 is: " + whileSum);

let f = 1;
while (f <= 50) {
    if (f % 5 == 0) console.log(f + " is a mutliple of 5")
    f ++;
}

//Exercise 5: Do While loops
let g = 1;
do {
    console.log(g);
    g ++;
}
while (g <= 10);


let overall = 0;
let d = 1;
do {
    overall += d;
    d ++;
}
while (d <= 100);
console.log("Total is: " + overall);


let userInput ;
do {
    userInput = prompt("Enter a number greater than 10: ");
}
while ( userInput <= 10);
console.log("Your number is greater than 10");

let userNumber = 0;
let computerNumber = Math.floor(Math.random() * 10) + 1;
do {
    userNumber = promp("Guess the number selected by the computer: ");
}
while ( userNumber == computerNumber);