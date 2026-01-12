let button = document.querySelector("#add-btn");    // selecting the button
console.log("You added a task!!");


button.onclick = () => {
  let taskinp = document.querySelector("#task").value;

if (taskinp === "") {
    return alert("Please enter something!!");
}
  // create list item
  let list = document.createElement("list");
  list.innerText = taskinp;

 
let ul = document.querySelector("ul")
ul.appendChild(list)

  let dltButton = document.createElement("button");
  dltButton.innerText = "remove"
  dltButton.id = "dlt-btn";

  dltButton.onclick = () => {
    list.remove()
    console.log("You deleted a task!!")
  }

list.appendChild(dltButton)


  // clear the input box
  document.querySelector("#task").value = "";
 
};
