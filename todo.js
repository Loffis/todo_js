let form = document.getElementById("input-id");
let divTasks = document.getElementById("tasks");

var id = 0;
var task = "";
var isDone = false;

function Todo(task) {
    this.id = ++id;
    this.task = task;
    this.isDone = false;
}

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log("Your input: " + event.target.elements.task.value);
    task = event.target.elements.task.value;
    console.log("task: " + task);
    createTodo(task);
    event.target.reset();
}

function createTodo(task) {
    let newTodo = new Todo(task);
    console.log(newTodo);

}