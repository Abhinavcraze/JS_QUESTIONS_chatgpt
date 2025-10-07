//event handlings methods are 
// click ,input,change,submit,DOMContentLoaded

const div = document.createElement("div");
div.id = "container"
document.body.appendChild(div)


const input1 = document.createElement("input")
input1.type = "text";
input1.placeholder = "Type here..."
input1.id = "liveInput"; 
document.body.appendChild(input1)

//Adding event Listener

const button =document.createElement("button");
button.id = "myBtn";
button.textContent = "click";
document.body.appendChild(button);
const btn = document.getElementById("myBtn");

const button2 =document.createElement("button");
button2.id = "myBtn1";
button2.textContent = "click for handleclick";
document.body.appendChild(button2);
const btn1 = document.getElementById("myBtn1");
//==============================                                     
//click-eventHandler
//Create a button and display an alert "Button clicked!" when pressed.
btn.addEventListener("click",() => {
    alert("Button Clicked!")
})

//Create 3 buttons labeled "Red", "Green", "Blue". Change the page background to the corresponding color when each is clicked.

const div1 = document.createElement("div");
div1.id = "container"
document.body.appendChild(div1)

const red = document.createElement("button");
red.id = "red"
red.textContent="red"
red.style.background = "red";
div1.appendChild(red)

const green = document.createElement("button");
green.id = "red"
green.textContent="green"
green.style.background = "green";
div1.appendChild(green)

const blue = document.createElement("button");
blue.id = "blue"
blue.textContent="blue"
blue.style.background = "blue";
div1.appendChild(blue)

red.addEventListener("click", (e) => {
    document.body.style.background= "red";
})

green.addEventListener("click", (e) => {
    document.body.style.background= "green";
})

blue.addEventListener("click", (e) => {
    document.body.style.background= "blue";
})
//Create a list of items (<ul>). When you click an item, log its text content in the console.

const ul1 = document.createElement("ul");


const items1 = ["jana","gana","mana","gathi"];

items1.forEach(text => {
    const li1 = document.createElement("li");
    li1.textContent = text;
    ul1.appendChild(li1);
})

document.getElementById("container").appendChild(ul1);

ul1.addEventListener("click", (event) => {
    if(event.target.tagName =="LI")
        console.log(event.target.textContent);
})


//Create a button that toggles the visibility of a paragraph when clicked.
console.log(`toggle is switching between 2 states add or remove,show or hide`)
const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Paragraph";

        const paragraph = document.createElement("p");
        paragraph.textContent = "This is a paragraph that can be shown or hidden.";

        // Add both to the document body
        document.body.appendChild(toggleBtn);
        document.body.appendChild(paragraph);

        // Add click event to toggle visibility
        toggleBtn.addEventListener("click", () => {
            if (paragraph.style.display === "none") {
                paragraph.style.display = "block";
            } else {
                paragraph.style.display = "none";
            }
        });

//Create multiple buttons dynamically from an array of names. When each button is clicked, alert "Hello <name>!"

const names = ["Alice", "Bob", "Charlie", "Diana"];

names.forEach(name => {
    const button2 = document.createElement("button");
    button2.textContent = name;

    button2.addEventListener("click", () => {
        alert(`Hello ${name}!`);
    });

    document.body.appendChild(button2);
    document.body.appendChild(document.createElement("br"));
});

//Event Object

btn.addEventListener("click", (e) => {
    console.log("Event type:",e.type);
    console.log("clicked element:", e.target);
})

//=====================================

function handleClick(){
    alert("Clicked!");
    console.log('addEventListener Performed')
    console.log(`alert not shown due to removeEventListener`)
}
btn1.addEventListener("click",handleClick);
btn1.removeEventListener("click",handleClick);

//input 


//Create an input box and log the typed text in the console on each keystroke.
//(input --->eventhandler)
const input = document.getElementById('liveInput');

    input.addEventListener('input', (event) => {
      console.log(event.target.value);
    });

//Create a text input that updates a <p> element to show what the user types in real-time
document.createElement("br")
document.createElement("br")
document.createElement("br")

const tx = document.createElement("div")
const label = document.createElement("label");
//label.htmlFor = "textInput"; 
label.textContent = "Enter text: ";

const txt = document.createElement("input")
txt.type = "text"
txt.id = "textInput"
const txt1 = document.createElement("p")
txt1.id = "output"

tx.appendChild(label)
tx.appendChild(txt)
tx.appendChild(txt1)

document.body.appendChild(tx);

textInput.addEventListener('input', function() {
    output.textContent = textInput.value;
});

//Create a password input. Show a message "Strong" if the typed password is more than 8 characters, else "Weak"
document.createElement("br")
document.createElement("br")
document.createElement("br")

const tx1 = document.createElement("div")
const label1 = document.createElement("label");
label1.textContent = "Enter Password: ";

const txt2 = document.createElement("input")
txt2.type = "text"
txt2.id = "textInput1"
const txt3 = document.createElement("p")
txt3.id = "output1"

tx1.appendChild(label1)
tx1.appendChild(txt2)
tx1.appendChild(txt3)

document.body.appendChild(tx1);

textInput1.addEventListener('input', function() {
    const value = textInput1.value
    if(value.length > 8 && /@/.test(value)){ //or /@/.textInput(input)
        output1.textContent = "Strong"
    }
    else{
        output1.textContent = "Weak"
    }
});

//Create a number input. Show "Even" or "Odd" dynamically as the user types a number.

document.createElement("br")
document.createElement("br")
document.createElement("br")

const tx2 = document.createElement("div")
const label2 = document.createElement("label");
label2.textContent = "Enter a Number: ";

const txt4 = document.createElement("input")
txt4.type = "text"
txt4.id = "textInput2"
const txt5 = document.createElement("p")
txt5.id = "output2"

tx2.appendChild(label2)
tx2.appendChild(txt4)
tx2.appendChild(txt5)

document.body.appendChild(tx2);

textInput2.addEventListener('input', function() {
    const value1 = textInput2.value
    if(value1 % 2 == 0){ 
        output2.textContent = "Even"
    }
    else{
        output2.textContent = "Odd"
    }
});


//Create a <ul> list of items. When you click an item, highlight it (change background color).
//using div of id container of html

const ul = document.createElement("ul");
ul.id = "myList";

const items = ["Apple","Banana","Mango","Orange"];

items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
})

document.getElementById("container").appendChild(ul);

ul.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        Array.from(ul.children).forEach(li => li.classList.remove("highlight"));
         event.target.classList.add("highlight");
    }
})

//Create a form with name and email. 
// On submit, prevent the default behavior and log the values.


const form = document.createElement("form");
form.id = "myform";

form.style.background = "pink"
form.style.padding = "20px 30px";
form.style.borderRadius = "10px";
form.style.boxShadow = "0 4px 10px rgba(141, 187, 31, 0.1)";
form.style.width = "300px";
form.style.margin = "100px auto"; 
form.style.fontFamily = "Arial, sans-serif";

//---Name Field ---

const nameLabel = document.createElement("label");
nameLabel.textContent = "Name: ";
nameLabel.style.display = "block";
nameLabel.style.marginBottom = "10px";
nameLabel.style.fontWeight = "bold";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.required = true;
nameInput.style.width = "100%";
nameInput.style.padding = "8px";
nameInput.style.marginTop = "5px";
nameInput.style.marginBottom = "15px";
nameInput.style.border = "1px solid #ccc";
nameInput.style.borderRadius = "5px";
nameInput.style.outline = "none";

nameLabel.appendChild(nameInput);

form.appendChild(nameLabel)

// === Email field ===
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email";
emailLabel.style.display = "block";
emailLabel.style.marginBottom = "10px";
emailLabel.style.fontWeight = "bold";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.required = true;
emailInput.style.width = "100%";
emailInput.style.padding = "8px";
emailInput.style.marginTop = "5px";
emailInput.style.marginBottom = "15px";
emailInput.style.border = "1px solid #ccc";
emailInput.style.borderRadius = "5px";
emailInput.style.outline = "none";

emailLabel.appendChild(emailInput);
form.appendChild(emailLabel)

//====submit Button =====

const button1 = document.createElement("button");
button1.type = "submit";
button1.textContent = "Submit";
button1.style.width = "50%";
button1.style.padding= "10px";
button1.style.background = "violet";
button1.style.align = "center";
button1.style.color = "white";
button1.style.fontSize = "16px";
button1.style.border = "none";
button1.style.borderRadius = "5px";
button1.style.cursor = "pointer";
button1.addEventListener("mouseover", () => {
    button1.style.background = "#45a049";
});
button1.addEventListener("mouseout", () => {
    button1.style.background = "#4CAF50";
});

form.appendChild(button1);

document.body.appendChild(form)

form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(`Submitted:\nName: ${nameInput.value}\nEmail: ${emailInput.value}`);
    });

//Create a table of students dynamically. Add a “Delete” button in each row. 
// When clicked, remove that row from the table.

    const students = [
      { id: 1, name: "Arun", grade: "A" },
      { id: 2, name: "Priya", grade: "B" },
      { id: 3, name: "Ravi", grade: "A" },
      { id: 4, name: "Sara", grade: "C" }
    ];

    // === Create Table ===
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.margin = "50px auto";
    table.style.width = "60%";
    table.style.fontFamily = "Arial, sans-serif";
    table.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";

    // === Table Header ===
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    let array5 = ["ID", "Name", "Grade", "Action"]

    array5.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      th.style.border = "1px solid #ddd";
      th.style.padding = "10px";
      th.style.background = "#f2f2f2";
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // === Table Body ===
    const tbody = document.createElement("tbody");

    students.forEach(student => {
      const row = document.createElement("tr");

      // ID
      const tdId = document.createElement("td");
      tdId.textContent = student.id;
      tdId.style.border = "1px solid #ddd";
      tdId.style.padding = "10px";

      // Name
      const tdName = document.createElement("td");
      tdName.textContent = student.name;
      tdName.style.border = "1px solid #ddd";
      tdName.style.padding = "10px";

      // Grade
      const tdGrade = document.createElement("td");
      tdGrade.textContent = student.grade;
      tdGrade.style.border = "1px solid #ddd";
      tdGrade.style.padding = "10px";

      // Delete Button
      const tdAction = document.createElement("td");
      tdAction.style.border = "1px solid #ddd";
      tdAction.style.padding = "10px";
      tdAction.style.textAlign = "center";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.background = "#e74c3c";
      deleteBtn.style.color = "white";
      deleteBtn.style.border = "none";
      deleteBtn.style.padding = "6px 12px";
      deleteBtn.style.borderRadius = "5px";
      deleteBtn.style.cursor = "pointer";

      deleteBtn.addEventListener("click", () => {
        row.remove(); // remove row when button clicked
      });

      tdAction.appendChild(deleteBtn);

      // Append cells
      row.appendChild(tdId);
      row.appendChild(tdName);
      row.appendChild(tdGrade);
      row.appendChild(tdAction);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Append table to body
    document.body.appendChild(table);

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

//Create a text input and a <div>. Whenever the user types, display the reversed text in the <div> in real-time.
const inputs = document.createElement("input");
    inputs.type = "text";
    inputs.placeholder = "Type something...";
    inputs.style.padding = "8px";
    inputs.style.marginBottom = "10px";
    inputs.style.display = "block";

    // 2. Create output div
    const outputDiv = document.createElement("div");
    outputDiv.style.marginTop = "10px";
    outputDiv.style.fontSize = "18px";
    outputDiv.style.fontWeight = "bold";
    outputDiv.style.color = "blue";

   

    // 4. Add event listener for typing
    inputs.addEventListener("input", () => {
      const text = inputs.value;
      const reversed = text.split("").reverse().join("");
      outputDiv.textContent = reversed;
    });

     // 3. Add both to body
    document.body.appendChild(inputs);
    document.body.appendChild(outputDiv);
    

