const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const TODOS = "todos"

let todo = [];

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todo = todo.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODOS, JSON.stringify(todo));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.className = newTodo.className;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "✘";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}


function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {text: newTodo, id: Date.now(), className: "flex"}
  todo.push(newTodoObj);
  paintTodo(newTodoObj);
  todoInput.value = "";
  saveTodo();
}

const savedTodos = localStorage.getItem(TODOS);

if(savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todo = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);