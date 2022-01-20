const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  span.innerText = newTodo;
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault(event);
  const newTodo = todoInput.value;
  paintTodo(newTodo);
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleTodoSubmit);
