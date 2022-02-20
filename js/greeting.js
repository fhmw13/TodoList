const greetContainer = document.querySelector("div.greeting");
const greeting = document.querySelector("#greeting-title");
const greetingForm = document.querySelector("#greeting-form");
const greetingInput = document.querySelector("#greeting-input");
const greet = document.getElementsByClassName("greeting");
const todoClass = document.getElementsByClassName("todo");
const userName = localStorage.getItem("user");

function paintGreeting(name) {
  const span = document.createElement("span");
  span.innerText = `Hello ${name}`;
  span.classList.add("greeting-title");
  greetContainer.prepend(span);
}

function toggleHidden(item) {
  item.classList.toggle("hidden");
}

function handleHidden() {
  Array.from(greet).forEach(toggleHidden);
  Array.from(todoClass).forEach(toggleHidden);
}

function handleGreetingSubmit(event) {
  event.preventDefault();
  localStorage.setItem("user", greetingInput.value);
  const userName = localStorage.getItem("user");
  handleHidden();
  paintGreeting(userName);
}

if(userName !== null) {
  handleHidden();
  paintGreeting(userName);
} 

greetingForm.addEventListener("submit", handleGreetingSubmit);
