//Create a dropdown with colors. Change the page background to 
// the selected color when it changes.

const label = document.createElement("label");
label.textContent = "choose a background color: ";
label.htmlFor = "colorSelect";

const select = document.createElement("select")
select.id = "colorSelect";

const colors = ["Red","pink","violet","grey","purple","lavender"]

colors.forEach(color => {
    const option = document.createElement("option");

    option.value = color.toLowerCase();
    option.textContent = color;
    select.appendChild(option)
})


select.addEventListener("change",function(){
    document.body.style.background = select.value
})


document.body.appendChild(label);
document.body.appendChild(select);

//Create a select box with classes (6A, 6B, 6C).
//  When changed, display "Selected class: <value>" in a <div>
document.body.appendChild(document.createElement("br"));
const label1 = document.createElement("label");
label1.textContent = "select a class: ";
label1.htmlFor = "selectClass";

const select1 = document.createElement("select")
select1.id = "selectClass";

const classes = ["6A","6B","6C"];

classes.forEach(cls => {
    const classic = document.createElement("option");
    classic.value=cls;
    classic.textContent = cls;
    select1.appendChild(classic);

})

const para = document.createElement("p")


select1.addEventListener("change",function(){
    para.textContent = `Selected Class:` + select1.value
})


document.body.appendChild(label1);
document.body.appendChild(select1);
document.body.appendChild(para);

//Create a dropdown of fruits. When the selection changes, log "You selected <fruit>"

document.body.appendChild(document.createElement("br"));
const label2 = document.createElement("label");
label2.textContent = "select a Fruits: ";
label2.htmlFor = "selectFruits";

const select2 = document.createElement("select")
select2.id = "selectFruits";

const fruits = ["Apple","Banana","Mango","Orange"];

fruits.forEach(cls => {
    const classic = document.createElement("option");
    classic.value=cls;
    classic.textContent = cls;
    select2.appendChild(classic);

})

select2.addEventListener("change",function(){
    console.log(`You Selected:`,select2.value)
}) 

document.body.appendChild(label2);
document.body.appendChild(select2);

//Create a <input type="checkbox">. When its state changes, 
//show "Checked" or "Unchecked" in a paragraph.

document.body.appendChild(document.createElement("br"));
const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "myCheckbox";

  const label3 = document.createElement("label");
  label3.htmlFor = "myCheckbox";
  label3.textContent = "Check me";

  const statusPara = document.createElement("p");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      statusPara.textContent = "Checked";
    } else {
      statusPara.textContent = "Unchecked";
    }
  });

  statusPara.textContent = "Unchecked";

  document.body.appendChild(label3);
  document.body.appendChild(checkbox);
  document.body.appendChild(document.createElement("br")); // Line break
  document.body.appendChild(statusPara);

  //Create a radio button group. When a radio button is selected, display "You chose <option>

  const groupLabel = document.createElement("p");
  groupLabel.textContent = "Choose an option:";
  document.body.appendChild(groupLabel);

  const options = ["JIO", "Airtel", "BSNL"];

  const resultPara = document.createElement("p");
  resultPara.textContent = "You choosen: ";
  document.body.appendChild(resultPara);

  options.forEach((opt, index) => {
    const label = document.createElement("label");
    label.style.display = "block";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "options"; 
    radio.value = opt;

    radio.addEventListener("change", function () {
      resultPara.textContent = `You choosen ${radio.value}`;
    });

    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    document.body.appendChild(label);
  });