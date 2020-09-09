let form = document.getElementById("input-id");
let divTasks = document.getElementById("tasks");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log("Your input: " + event.target.elements.task.value);

}