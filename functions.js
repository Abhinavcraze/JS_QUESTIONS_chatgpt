//Write a function greet that takes a name as a parameter and prints "Hello, <name>!".
function greet(name){
    console.log(`Hello,${name}`)
}
greet("abhinav")

//Write a function square that takes a number and returns its square

const square =  function(number){
    console.log(number**2)
}
square(4)

//Write a function sum that takes two numbers and returns their sum.

const sum = function(a,b){
    console.log(a+b)
}
sum(10,20)

//------------------------------------------------

//Write a function sumArray that takes an array of numbers and returns their sum

const numbers = [1, 2, 3, 4, 5];

const sumArray = function(arr1){
    return arr1.reduce((sum,n)=> sum+n,0)
}
const total = sumArray(numbers)
console.log(total)

//method 2
function sumArray1(arr1){
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        sum+=arr1[i];
    }
    return sum;
}
console.log(sumArray1(numbers))

//Write a function printStudent that takes a student object and prints "Priya scored 80 marks

const student = { name: "Priya", marks: 80 };

const printStudent = function(stud){
    console.log(`${stud.name} scored ${stud.marks} marks`)
}
printStudent(student)

//Write a function greet that takes a name and a greeting message (default to "Hello"), e.g., greet("Ravi") → "Hello, Ravi"

function greet(name="Ravi"){
    console.log(`Hello ${name}`)
}
greet()

//method 2

function greet1(name,msg="Hello, "){
    console.log(`${msg} ${name}`)
}
greet1("abhinav")
greet1("jamuna","Welcome")

//----------------------------------------------------------------------
//Write a function createStudent that takes id, name, and marks and returns an object { id, name, marks }.

function createStudent(id,name,marks){
    return {id,name,marks}
}
console.log(createStudent(1,"Abhinav",95)) 

//Write a function calculator that returns an object with two methods:

function createMultiplier(factor){
    return function(number){
        return number*factor;
    }
}
const multiplier = createMultiplier(4);
console.log(multiplier(5));
//--
function sum1(factor){
    return function(number){
        return number+factor;
    }
}
const addition1 = sum1(10);
console.log(addition1(5));



//Write a function celsiusToFahrenheit(celsius) that converts Celsius to Fahrenheit.
//Formula: F = C * 9/5 + 32.
//Arrow Function

const celciustoFahrenhiet = (c) =>{
    console.log(`Fehrenhiet , ${c*(9/5) + 32}`)
} 
celciustoFahrenhiet(3)

//Check Even/Odd
function isEven(num){
    console.log(num%2==0)
}
isEven(4)

// Greeting with Time
// Write a function greetTime(name, hour) that prints:
// "Good Morning, <name>" if hour < 12
// "Good Afternoon, <name>" if 12 ≤ hour < 18
// "Good Evening, <name>" otherwise

const greetTime = (name,hour) => {
    if(hour<12) console.log(`Good Morning ${name}`);
    else if(hour >= 12 && hour<18) console.log(`Good Afternoon ${name}`)
    else console.log(`Good Night ${name}`)
}
greetTime("Abhinav",8)
greetTime("Jamuna",16)
greetTime("Bhuvana",22)

//Write a function maxInArray(arr) that returns the largest number in an array.
//use spread operator

function maxInArray(arr){
    return Math.max(...arr)
}
const number1 = [10,25,7,99,42];
console.log(maxInArray(number1))

//Write a function sumOdd(arr) that returns the sum of all odd numbers in the array.
function sumOdd(arr){
    let sum = 0;
    for(let i=0; i< arr.length ; i++){
        if(arr[i] % 2 !== 0) sum+=arr[i]
    }
    return sum;
}
console.log(sumOdd(number1))

//Write a function updateMarks(student, newMarks) that updates the student’s marks and returns the updated object.

const student2 = { name: "Arun", marks: 75, class: 6 };
function updateMarks(marks){
   student2.marks = 85;
   return student2
}
console.log(updateMarks(student2.marks))

//Write a function calculate(a, b) that returns an object with:

function calculate(a,b){
    return `{sum:${a+b}, difference:${a-b}, product: ${a*b}, quotation: ${a/b}`
}
console.log(calculate(10,20))

//Function as Parameter (Callback)
//Write a function applyOperation(a, b, operationFn) that applies the given operation function on a and b.

function applyOperation(a,b,operationFn){
    return operationFn(a,b)
}
console.log(applyOperation(4,8,(x,y) => x*y))
console.log(applyOperation(10,20,(x,y) => x+y))

//Write a function makeMultiplier(x) that returns another function which multiplies a given number by x.(closure)

function makeMultiplier(x){
    return function(y){
        return x*y;
    }
}
const double = makeMultiplier(2);
console.log(double(5))

//filter students
//Write a function getTopStudents(students, minMarks) that returns all students with marks ≥ minMarks.
const students = [
  { name: "Arun", marks: 50 },
  { name: "Priya", marks: 80 },
  { name: "Ravi", marks: 70 }
];

function getTopStudents(n,minMarks){
    return students.filter(n => n.marks >= minMarks)
}
console.log(getTopStudents(students,70))
//or
const minMarksStudent = students.reduce((minStudent, currentStudent) =>{
    return (currentStudent.marks > minStudent.marks) ? currentStudent : minStudent;
})
console.log("Student with minimum marks:", minMarksStudent);
console.log("Minimum marks:", minMarksStudent.marks);

//print hi  with anonymous function
//anonymous function(without function name)

setTimeout(function(){
    console.log("hi");
},5000)

//Immediately invoked function

// (() => {
//     const message = "This is a message";
//     console.log(message);
// })();

//constructor function
//regular function used to create new keyword to create new objects

function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hi, I'm ${this.name}`)
    }
}
const add = new Person("John",30);
add.greet()