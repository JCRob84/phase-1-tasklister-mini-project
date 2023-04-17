document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
});

const taskList = document.querySelector('#task-list');
taskList.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'button') {
    event.target.parentNode.remove();
  }
});

const form = document.querySelector('#new-task-form');
const taskList = document.querySelector('#task-list');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector('#new-task-input');
  const newTaskPriority = document.querySelector('#new-task-priority');
  const newTask = document.createElement('li');
  newTask.innerText = newTaskInput.value;
  newTask.classList.add(`priority-${newTaskPriority.value}`);
  taskList.appendChild(newTask);
  newTaskInput.value = '';
  newTaskPriority.value = 'low';
});

const taskList = document.querySelector('#task-list');
taskList.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    const taskText = event.target.innerText;
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskText;
    event.target.innerText = '';
    event.target.appendChild(editInput);
    editInput.addEventListener('blur', function() {
      event.target.innerText = editInput.value;
    });
  }
});

function addTask(event) {
  event.preventDefault();

  const taskInput = document.getElementById("task");
  const userInput = document.getElementById("user");
  const durationInput = document.getElementById("duration");
  const dateDueInput = document.getElementById("date-due");

  const task = {
    name: taskInput.value,
    user: userInput.value,
    duration: durationInput.value,
    dateDue: dateDueInput.value,
    priority: "low"
  };

  tasks.push(task);

  renderTasks();
  taskInput.value = "";
  userInput.value = "";
  durationInput.value = "";
  dateDueInput.value = "";
}