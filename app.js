const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

function createTaskElement(taskName) {
  const taskElement = document.createElement("li");
  taskElement.classList.add("task");

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.addEventListener("change", function () {
    if (this.checked) {
      taskElement.classList.add("done");
    } else {
      taskElement.classList.remove("done");
    }
  });

  const labelElement = document.createElement("label");
  labelElement.textContent = taskName;

  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.textContent = "Delete";
  deleteButtonElement.addEventListener("click", function () {
    taskElement.remove();
  });

  taskElement.appendChild(checkboxElement);
  taskElement.appendChild(labelElement);
  taskElement.appendChild(deleteButtonElement);

  return taskElement;
}

addTaskButton.addEventListener("click", function () {
  const taskName = newTaskInput.value;
  if (taskName.trim() !== "") {
    const taskElement = createTaskElement(taskName);
    todoList.appendChild(taskElement);
    newTaskInput.value = "";
  }
});
