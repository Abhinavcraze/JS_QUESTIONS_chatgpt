//Create a form with a name input. On submit, prevent default and log "Form submitted" in console

const form = document.createElement("form");

const nameInput = document.createElement("Input");
nameInput.type = "text";
nameInput.placeholder = "Enter your name";
nameInput.required = true;
nameInput.style.marginRight = "10px";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit";

form.appendChild(nameInput);
form.appendChild(submitBtn);

document.body.appendChild(form);

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log("Form Submitted");
})

//Create a login form with username and password. On submit, validate non-empty fields. Show "Login successful" if both filled, else "Fill all fields"


const form1 = document.createElement("form");

const nameInput1 = document.createElement("Input");
nameInput1.type = "text";
nameInput1.placeholder = "Enter your name";
//nameInput1.required = true;
nameInput1.style.marginRight = "10px";

document.body.appendChild(document.createElement("br"));

const passwordInput = document.createElement("Input");
passwordInput.type = "pwd";
passwordInput.placeholder = "Enter your password";
//passwordInput.required = true;
passwordInput.style.marginRight = "10px";

const submitBtn1 = document.createElement("button");
submitBtn1.type = "submit";
submitBtn1.textContent = "Submit";

form1.appendChild(nameInput1);
form1.appendChild(passwordInput);
form1.appendChild(submitBtn1);

document.body.appendChild(form1)

form1.addEventListener("submit", (event) =>{
    event.preventDefault();
    if(nameInput1.value!='' && passwordInput.value!='')
        console.log("Login Successful");
    else
        console.log(`fill all fields`)
})

//Create a registration form. On submit, prevent default and display
//  the entered data in a table.
const form2 = document.createElement("form");
form2.id = "registrationform";

const nameLabel = document.createElement("label");
nameLabel.textContent = "Name: ";
const nameInput2 = document.createElement("input");
nameInput2.type = "text";
nameInput2.name = "name";
nameInput2.required = true;
nameLabel.appendChild(nameInput2);

form2.appendChild(nameLabel);
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));

const classLabel = document.createElement("label");
classLabel.textContent = "Class: ";
const classInput = document.createElement("input");
classInput.type = "number";
classInput.name = "class";
classInput.required = true;
classLabel.appendChild(classInput);

form2.appendChild(classLabel);
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));

const emailLabel = document.createElement("label");
emailLabel.textContent = "Email: ";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.required = true;
emailLabel.appendChild(emailInput);

form2.appendChild(emailLabel);
form2.appendChild(document.createElement("br"));
form2.appendChild(document.createElement("br"));

const submitBtn2 = document.createElement("button");
submitBtn2.type = "submit";
submitBtn2.textContent = "Register";
form2.appendChild(submitBtn2);

document.body.appendChild(form2);

const table = document.createElement("table");
table.style.display = "none";

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
["Name","Email","Age"].forEach(text =>{
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
}) 
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

document.body.appendChild(table);

form2.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = nameInput2.value;
    const classe = classInput.value;
    const email = emailInput.value;
    

    const row = document.createElement("tr");
    [name, classe ,email].forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      row.appendChild(td);
    });

    tbody.appendChild(row);
    table.style.display = "table"; 

    form2.reset();
  });

  //Create a form with a number input. On submit, calculate and display the square of the number.
document.body.appendChild(document.createElement("br"));
const form3 = document.createElement("form");

const numberInput = document.createElement("input");
numberInput.type = "number";
numberInput.placeholder = "Enter a number";
numberInput.required = true;
numberInput.style.marginRight = "10px";

const submitBtn3 = document.createElement("button");
submitBtn3.type = "submit";
submitBtn3.textContent = "Calculate Square";

const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "15px";
resultDiv.style.fontSize = "18px";
resultDiv.style.fontWeight = "bold";
resultDiv.style.color = "blue";

form.appendChild(numberInput);
form.appendChild(submitBtn3);

document.body.appendChild(form);
document.body.appendChild(resultDiv);

form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop refresh

    const num = Number(numberInput.value); 
    const square = num * num;              

    resultDiv.textContent = `Square: ${square}`;
});

// Create a comment form. On submit, append the comment as a new <li> in a comment list without reloading the page
// without reloading -->window.onload

const form4 = document.createElement("form");

const textarea1 = document.createElement("textarea");
textarea1.placeholder = "Write your comment...";
textarea1.rows = 3;
textarea1.cols = 30;
textarea1.required = true;
textarea1.style.marginRight = "10px";

const submitBtn4 = document.createElement("button");
submitBtn4.type = "submit";
submitBtn4.textContent = "Add Comment";

form4.appendChild(textarea1);
form4.appendChild(submitBtn4);

const commentList = document.createElement("ul");
commentList.style.marginTop = "15px";

document.body.appendChild(form);
document.body.appendChild(commentList);

form4.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const commentText = textarea1.value.trim();
    if (commentText === "") return;

    const li = document.createElement("li");
    li.textContent = commentText;
    commentList.appendChild(li);

    textarea1.value = "";
});

document.body.appendChild(form4)