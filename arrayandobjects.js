//Array Of Objects

const students = [
    {id:1, name:"Arun" ,marks:85},
    {id:2, name:"Abhi" ,marks:90},
    {id:3, name:"priya",marks:89},
    {id:4, name:"divya",marks:78}
];

// Print only the names.(map)
const name = students.map(n=>n.name)
console.log(name)
// Get all students who scored > 86.
const score1 = students.filter(n=> n.marks>86)
console.log(score1)

document.getElementById("runbtn").addEventListener("click",()=>{
    let output="";
    const score = students.filter(n=> n.marks>86)
    output = score.map(n=> n.marks).join(", ")
    document.getElementById("output").textContent = output;
})

// Sort students by marks (descending).
const sorting = students.map(n=>n.marks)
sorting.sort((a,b) => b-a);
console.log(sorting)
// Find the average marks.(reduce)
let average = students.map(n=>n.marks)
let avg = average.reduce((acc,n) => acc+n , 0)
console.log(avg/students.length)
// Create a new array of names in uppercase.
let names = students.map(n=>n.name.toUpperCase())
console.log(names)
//----------------------------------------
const nums = [4, 9, 16, 25, 36];

for(let i=0; i<nums.length;i++){
    console.log(nums[i])
}

nums.forEach(n=>console.log(n))

//square a number
const sq=nums.map(n=>n*n)
console.log(sq)

//Print only even numbers.-filter
const evens = nums.filter(n => n %2 == 0);
document.getElementById("output1").innerHTML = `Even number in array are: ${evens}`

//sum of all numbers reducing  acc->accumulator
const sum = nums.reduce((acc,n) => acc+n , 0);
document.getElementById("output1").innerHTML = `Even number in array are: ${evens} \nsum of numbers are: ${sum}`;

//sorting

const arr = [10,20,30,40];
console.log(arr.sort((a,b) => a-b));//ascending
console.log(arr.sort((a,b) => b-a));//descending

//print the number greater than 10

console.log(nums.filter(n=>n>10))

//-----------------------------------------------
//Array of Object

const students1 = [
  { id: 1, name: "Arun", class: 6 },
  { id: 2, name: "Priya", class: 7 },
  { id: 3, name: "Karthick", class: 6 }
];

//Print names of students in class 6.
const stud = students1.filter(n=>n.class == 6).map(n=>n.name)
console.log(stud)

//sort them by id desc
const studbydescid = students.sort((a,b) => b.id-a.id).map(student=>student.name)
console.log(studbydescid)

//Find if a student named "Priya" exists.

const existance = students.find(s=>s.name == 'priya')
console.log(existance)


const existance1 = students.some(s=>s.name == 'priya')
console.log(existance1)
//------------------------------------------------------

//Objects

const student = { id: 5, name: "Kavin", class: 7, marks: 88 };


//Print name and marks.
console.log(`Name:${student.name} 
,Marks: ${student.marks}`)

//update marks to 95
student["marks"] = 95;
console.log(student.marks)

student["section"] = 'A'
console.log(student)

//---------------------------------------------------------

//Arrays

//get the string from an array where 2ns element is r

const originalArray=["apple","orange","grapes","strawberry","bear","car"];

const filteredArray = originalArray.filter(word => {
  if(word.length >=2){
    return word[1] == 'r';
  }
  return false;
})
console.log(filteredArray)

//------------------------------------------------------

//Array of Objects
const student2 = [
  { id: 1, name: "Arun", class: 6, marks: 50 },
  { id: 2, name: "Priya", class: 6, marks: 80 },
  { id: 3, name: "Karthick", class: 7, marks: 90 },
];
//print names of student with marks > 70

console.log(student2.filter(n=>n.marks>70).map(n=>n.name))

//sort students by mark

console.log(student2.sort((a,b) => b.marks-a.marks))

//Find the average marks of class 6 students.
const avgmark = student2.filter(n=>n.class==6)
const sol = avgmark.reduce((sum,student) => sum+student.marks,0) /avgmark.length
console.log(sol)

//-----------------------------------------------------
const student3 = [
  { id: 1, name: "Arun", marks: 50 },
  { id: 2, name: "Priya", marks: 80 },
  { id: 3, name: "Ravi", marks: 70 }
];

//Print the name of the student with id = 2.

const named = student3.find(n=>n.id==2)
console.log(named.name)

//Get all students who scored more than 60.
console.log(student3.filter(n => n.marks>60))


//create an array of just students name
console.log(student3.map(n=>n.name))

//Sort students by marks in descending order.
console.log(student3.sort((a,b) => b.marks - a.marks))

//Increase marks of the student with id = 1 by 10.
const st =student3.find(n=>n.id==1)
if(st){
    st.marks+=10;
}
console.log(st)

//Get names of students who scored above 60, sorted alphabetically.

const p = student3.filter(n=>n.marks>60)
const p1= p.map(n=>n.name)
const p2 = p1.sort((a,b) => a-b)
console.log(p2)

//------------------------------------------------

//nested Arrays
const classes = [
  { className: "6A", students: [{ name: "Arun", marks: 50 }, { name: "Priya", marks: 80 }] },
  { className: "6B", students: [{ name: "Ravi", marks: 70 }, { name: "Sara", marks: 90 }] }
];

//List all student names in class "6B
const q = classes.find(n=>n.className == "6B")
console.log(q.students.map(n=>n.name))

//Count how many students scored above 70 in all classes.

const highscores = classes.flatMap(c=>c.students).filter(s=>s.marks>70)
console.log(highscores.length)

//---------------------------------------------------

//for-of
// const colors = ["red", "green", "blue"];
// Use for...of to print each color.

// Use for...in to print index + color (e.g., 0: red).

const student12 = [
  { name: "Arun", marks: 50 },
  { name: "Priya", marks: 80 },
  { name: "Ravi", marks: 70 }
];
//Use for...of to print "Arun scored 50", "Priya scored 80", etc.

for(const stud of student12){
  console.log(`${stud.name} scored ${stud.marks}`);
}

//for-in
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}