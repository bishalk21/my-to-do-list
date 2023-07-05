const inputText = document.getElementById("input-text");
const addBtn = document.getElementById("add-btn");
const taskContainer = document.getElementById("task-list");

renderTaskList();

addBtn.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("Your search field is empty!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputText.value = "";
  saveTaskList();
});

taskContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTaskList();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTaskList();
  }
});

function saveTaskList() {
  localStorage.setItem("tasks", taskContainer.innerHTML);
}

function renderTaskList() {
  taskContainer.innerHTML = localStorage.getItem("tasks");
}
