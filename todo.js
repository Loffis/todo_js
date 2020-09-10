let todos = [];
let form = document.getElementById("input-id");
let divTasks = document.getElementById("tasks");
let divMessages = document.getElementById("messages");
let messages = document.createElement("h3");
let displayedTodos = document.createElement("p");
let viewButton = document.getElementById("btn-view");
let deleteButton = document.getElementById("btn-delete");

let id = -1;
let task = "";
let isDone = false;

function Todo(task) {
    this.id = ++id;
    this.task = task;
    this.isDone = false;
}

form.addEventListener("submit", onSubmit);
viewButton.addEventListener("click", displayTodos);
deleteButton.addEventListener("click", deleteTodo);

function onSubmit(event) {
    event.preventDefault();
    task = event.target.elements.task.value;
    createTodo(task);
    event.target.reset();
}

function createTodo(task) {
    let newTodo = new Todo(task);
    todos.push(newTodo);
}

function displayTodos() {
    displayedTodos.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        displayedTodos.innerHTML += "<br>ID: " + todos[i].id +
            "<br>Finished: " + todos[i].isDone +
            "<br>Task: " + todos[i].task + "<br>";
    }
    divTasks.appendChild(displayedTodos);
}

/** deleteTodo funkar inte till 100%. Eftersom index inte stämmer med ID alltid */

function deleteTodo() {
    let idToDelete = prompt("Delete which one?");
    if (isNaN(idToDelete)) {
        messages.innerText = "Not a valid number!";
        divMessages.appendChild(messages);
    } else if (todos.some(todo => {
            return todo.id == idToDelete;
        })) {
        messages.innerText = "";
        todos.splice(idToDelete, 1);
        alert("Todo with id " + idToDelete + " deleted.");
    } else {
        messages.innerText = "ID not found!";
        divMessages.appendChild(messages);
    }
}