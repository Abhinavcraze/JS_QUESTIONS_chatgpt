//1. Selecting Elements

// getElementById("id") ,querySelector(".class")
// querySelectorAll("tag"),getElementByClassName()
//getElementByTagName() --> UPPERCASE

// 2.changing content 

// element.innerHTML ="..."
// element.textContent = "..."

// 3.changing styles

//element.style.color = "red"

//-----------------------------------

//creating and appending child

const h1 = document.createElement("h1");
h1.textContent = "New Item";
document.querySelector("body").appendChild(h1);


const myUnorderedList = document.getElementById('dev')
for(let i=1;i<=3;i++){
    const li = document.createElement("li");
    li.textContent = "item"+i;
    myUnorderedList.appendChild(li);
}

//Create an HTML page with a <p> tag. Use JS to change the text to "Hello, DOM!"

const para = document.createElement('p');
para.innerHTML = "Hello, DOM!"
document.querySelector("body").appendChild(para)

//Select a <div> with id "box" and change its background color to yellow.

const div = document.createElement('div');
div.innerHTML = "make a colr of text to blue";
div.id="box"
document.body.appendChild(div);
const box = document.getElementById("box");
box.style.backgroundColor = "yellow";
box.style.color = "blue"


//Use JS to add "Mango" at the end. of ul
const p =document.createElement('li')
p.innerText="Mango"
myUnorderedList.appendChild(p);

//remove item3 from list
const ul =  document.getElementById('dev');
const liToRemove = ul.children[2];
ul.removeChild(liToRemove);


//Add a new <h2> element with text "Welcome" dynamically when the page loads.
//dynamically  --->  after the page finishes loading

window.onload = function() {
      const h2 = document.createElement("h2");
      h2.textContent = "Welcome";              
      document.body.appendChild(h2);      
    };

//dynamically create table rows and display the data

const students = [          //Array of Objects
  { name: "Arun", roll: 1 },
  { name: "Priya", roll: 2 }
];

const table =document.createElement('table')
// table.id= "studentTable"
// const table1 = document.getElementById("studentTable");

const headerRow = document.createElement("tr");

const th1 = document.createElement("th");
th1.textContent = "Name";
headerRow.appendChild(th1);

const th2 = document.createElement("th");
th2.textContent = "Roll NO";
headerRow.appendChild(th2);

table.appendChild(headerRow)

students.forEach(student => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    const rollCell = document.createElement("td");
    rollCell.textContent = student.roll;
    row.appendChild(rollCell);

    table.appendChild(row);
})
document.body.appendChild(table);

//---------------------------------------------------------------


// Make a <div> with id "counter" and two buttons "+" and "-".
// When + is clicked, increase the counter.
// When - is clicked, decrease the counter.

const counterDiv = document.createElement('div')
div.id = 'counter' 
counterDiv.textContent = `count `+ 0
document.body.appendChild(counterDiv)

const plusBtn = document.createElement('button')
plusBtn.textContent = '+'
document.body.appendChild(plusBtn)

const minusBtn = document.createElement('button');
minusBtn.textContent = '-';
document.body.appendChild(minusBtn);

let count = 0;

plusBtn.addEventListener('click',() => {
    count++;
    counterDiv.textContent = count;
})

minusBtn.addEventListener('click',() => {
    count--;
    counterDiv.textContent = count;
})
