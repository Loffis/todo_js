let todos = [];
let form = document.getElementById("input-id");
let divTasks = document.getElementById("tasks");
let displayedTodos = document.createElement("p");
let viewButton = document.getElementById("btn-view");

let id = 0;
let task = "";
let isDone = false;

function Todo(task) {
    this.id = ++id;
    this.task = task;
    this.isDone = false;
}

form.addEventListener("submit", onSubmit);
viewButton.addEventListener("click", displayTodos);

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