const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  const idFilter = (toDo) => {
    return toDo.id !== parseInt(li.id);
  };
  toDos = toDos.filter(idFilter);
  saveToDos();
  li.remove();
}
function doneToDo(event) {
  const span = event.target.parentElement.firstChild;
  const dle = document.createElement("del");
  const li = event.target.parentElement;
  li.prepend(dle);
  dle.appendChild(span);
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const blank = document.createElement("button");
  const done = document.createElement("button");
  done.innerText = "✔";
  done.addEventListener("click", doneToDo);
  blank.innerText = "❌";
  blank.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(done);
  li.appendChild(blank);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = { text: newToDo, id: Date.now() };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
