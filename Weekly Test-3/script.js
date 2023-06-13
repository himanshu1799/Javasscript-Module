const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todosContainer = document.getElementById("todosContainer");

// Retrieve todos from local storage on page load
window.addEventListener("load", function () {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(function (todo) {
    const newTodo = createTodoElement(todo.text, todo.checked, todo.dateTime);
    todosContainer.appendChild(newTodo);
  });
});

// Add event listener to the button for adding new todos
addButton.addEventListener("click", function () {
  const todoText = todoInput.value;
  if (todoText.trim() !== "") {
    const dateTime = new Date().toLocaleString();
    const newTodo = createTodoElement(todoText, false, dateTime);
    todosContainer.appendChild(newTodo);
    saveTodosToLocalStorage();
    todoInput.value = "";
  }
});

// Function to create a new todo element
function createTodoElement(text, checked, dateTime) {
  const todo = document.createElement("div");
  todo.classList.add("todos");
  if (checked) {
    todo.classList.add("checked");
  }

  const checkIcon = document.createElement("span");
  checkIcon.innerHTML = "&#x2713;";
  checkIcon.addEventListener("click", function () {
    todo.classList.toggle("checked");
    saveTodosToLocalStorage();
  });

  const todoText = document.createElement("p");
  todoText.innerText = text;
  todoText.classList.add("task");

  const dateTimeText = document.createElement("span");
  dateTimeText.classList.add("datetime");
  dateTimeText.innerText = formatDateTime(dateTime);

  const deleteIcon = document.createElement("span");
  deleteIcon.innerHTML = "&#x2717;";
  deleteIcon.addEventListener("click", function () {
    todo.remove();
    saveTodosToLocalStorage();
  });

  todo.appendChild(checkIcon);
  todo.appendChild(todoText);
  todo.appendChild(deleteIcon);
  todo.appendChild(dateTimeText);

  return todo;
}

// Function to format date and time
function formatDateTime(dateTime) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(dateTime).toLocaleString(undefined, options);
}

// Function to save todos to local storage
function saveTodosToLocalStorage() {
  const todos = Array.from(todosContainer.children).map(function (todo) {
    return {
      text: todo.querySelector("p").innerText,
      checked: todo.classList.contains("checked"),
      dateTime: todo.querySelector(".datetime").innerText,
    };
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
