//Strings
let name ="Bandaru";
var a = "Sampath";
const b = "Kumar";
//before changing the name
console.log(name+" before changing name");
name = "Sampath";
//after changing the name
console.log(name+" after changing name");
//before changing the a
console.log(a+" before changing a");
a = "Bandaru";
//after changing the a
console.log(a+" after changing a");
//changing the b is not possible
console.log(b);

//Integers
let num1 = 10;
var num2 = 20;
const num3 = 30;

//Float
let float1 = 10.5;
var float2 = 20.5;

//Boolean
let bool1 = true;
var bool2 = false;

// Number + Number => Addition 
var add = 1 + 2;
console.log( add );

// Number + String => Concatenation
var adding =  5 + "hello"; 
console.log( adding );
//String Concatenation
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3);

//String Interpolation
let name1 = "Sampath";
let age = 23;
let str4 = `My name is ${name1} and I am ${age} years old.`;

// Number - Number => Subtraction 
let sub = 10 - 7;
console.log( sub );

// Number * Number => Multiplication
let mul1 = 3 * 3;
let mul2 = -4 * 4; 
console.log(mul1);
console.log(mul2);

let mul3 = Infinity * 0;
let mul4 = Infinity * Infinity;
console.log(a);
console.log(b);

// Number / Number => Division
let div1 = 10 / 2;
console.log(div1);
let div2 = 1.2 / 0.3;
console.log(div2);

// Number % Number => Modulus
let mod1 = 10 % 3;
console.log(mod1);
let mod2 = -10 % 2;
console.log(mod2);

// Number ** Number => Exponentiation
let exp1 = 2 ** 3;
console.log(exp1);
let exp2 = 10 ** -1;
console.log(exp2);

//Increment
let x = 10;
x++;
console.log(x);
//Decrement
let y = 10;
y--;
console.log(y);

//Comparison Operators
let comp1 = 10 > 5;
console.log(comp1);
let comp2 = 10 < 5;
console.log(comp2);
let comp3 = 10 >= 5;
console.log(comp3);
let comp4 = 10 <= 5;
console.log(comp4);
let comp5 = 10 == 5;
console.log(comp5);
let comp6 = 10 != 5;
console.log(comp6);
let comp7 = 10 === 5; //Strict Equality
console.log(comp7);
let comp8 = 10 !== 5; //Strict Inequality
console.log(comp8);

//Logical Operators
let log1 = true && true;    //AND
console.log(log1);
let log2 = true || false;   //OR
console.log(log2);
let log3 = !true;           //NOT
console.log(log3);

//Bitwise Operators
let bit1 = 5 & 1; //AND
console.log(bit1);
let bit2 = 5 | 1; //OR
console.log(bit2);
let bit3 = 5 ^ 1; //XOR
console.log(bit3);
let bit4 = ~5;    //NOT
console.log(bit4);
let bit5 = 5 << 1; //Left Shift
console.log(bit5);
let bit6 = 5 >> 1; //Right Shift
console.log(bit6);
let bit7 = 5 >>> 1; //Zero Fill Right Shift
console.log(bit7);

//if-else statement
let age1 = 18;
if(age1 >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

//if-else if-else statement
let age2 = 18;
if(age2 >= 18){
    console.log("You are eligible to vote");
}
else if(age2 < 18 && age2 >= 13){
    console.log("You are a teenager");
}   
else{
    console.log("You are not eligible to vote");
}

//switch statement
let day = "Monday";
switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid Day");
}

//for loop
for(let Number=0; Number<=5; Number++){
    console.log(Number);
}

//while loop
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}

//do-while loop
let j = 0;
do{
    console.log(j);
    j++;
}
while(j<=5);

//break statement
for(let k=0; k<=5; k++){
    if(k==3){
        break;
    }
    console.log(k);
}

//continue statement
for(let l=0; l<=5; l++){
    if(l==3){
        continue;
    }
    console.log(l);
}

//return statement
function addNumbers(a, b){
    return a + b;
}
let sum = addNumbers(5, 10);
console.log(sum);

//Array
let arr = [1, 2, 3, 4, 5]; //Array of numbers
console.log(arr);
let arr1 = new Array(1, 2, 3, 4, 5);//Array of numbers
console.log(arr1);
let arr2 = new Array(5);  //Empty array with length 5
console.log(arr2);
let arr3 = ["Hello", "World"]; //Array of strings
console.log(arr3);
let arr4 = [1, "Hello", true]; //Array of mixed values
console.log(arr4);
let arr5 = [[1, 2], [3, 4]]; //Array of arrays
console.log(arr5);
let arr6 = [1, 2, 3, 4, 5];
console.log(arr6[0]); //Accessing the first element
console.log(arr6[2]); //Accessing the third element
console.log(arr6.length); //Length of the array

//Array Methods
arr6.push(6); //Adding an element at the end
console.log(arr6);
arr6.pop(); //Removing the last element
console.log(arr6);
arr6.unshift(0); //Adding an element at the beginning
console.log(arr6);
arr6.shift(); //Removing the first element
console.log(arr6);
arr6.splice(2, 0, 2.5); //Adding an element at the specified index
console.log(arr6);
arr6.splice(2, 1); //Removing an element at the specified index
console.log(arr6);
let arr7 = [1, 2, 3, 4, 5];
let arr8 = arr7.slice(1, 4); //Extracting elements from the array
console.log(arr8);
let arr9 = arr7.concat(arr8); //Concatenating two arrays
console.log(arr9);
let arr10 = arr7.concat(6, 7); //Concatenating an element to the array
console.log(arr10);
let arr11 = arr7.concat([6, 7]); //Concatenating an array to the array
console.log(arr11);

//DOM Manipulation
//Selecting elements
let element = document.getElementById("heading");
console.log(element);
let elements = document.getElementsByClassName("paragraph");
console.log(elements);
let elements1 = document.getElementsByTagName("p");
console.log(elements1);
let elements2 = document.querySelectorAll(".paragraph");
console.log(elements2);
let element1 = document.querySelector("#heading");
console.log(element1);

//Changing the content
element.innerHTML = "Hello World";
element.style.color = "red";
element.style.fontSize = "20px";
element.style.backgroundColor = "lightblue";

//Adding and removing classes
element.classList.add("heading");
element.classList.remove("heading");

//Adding and removing attributes
element.setAttribute("id", "heading");
element.removeAttribute("id");

//Adding and removing elements
let newElement = document.createElement("p");
newElement.innerHTML = "Hello World";
document.body.appendChild(newElement);
document.body.removeChild(newElement);
