document.addEventListener("DOMContentLoaded", () => { // DOM ready
  const todoInput = document.getElementById("todo-input"); // input
  const addTaskButton = document.getElementById("add-task-btn"); // add btn
  const todoList = document.getElementById("todo-list"); // list

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // load tasks

  tasks.forEach((task) => renderTask(task));// show tasks

  addTaskButton.addEventListener("click", () => { // add click
    const taskText = todoInput.value.trim(); // clean text
    if (taskText === "") return; // stop if empty

    const newTask = {
      id: Date.now(), // unique id
      text: taskText, // content
      completed: false, // default state
    };

    tasks.push(newTask); // add to array
    saveTasks(); // save storage
    renderTask(newTask); // show on UI
    todoInput.value = ""; // clear input
  });

  function renderTask(task) { // make li
    const li = document.createElement("li"); // create li
    li.setAttribute("data-id", task.id); // set id

    if (task.completed) li.classList.add("completed"); // if done then style

    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `; // text + delete button

    li.addEventListener("click", (e) => { // li click
      if (e.target.tagName === "BUTTON") return; // ignore delete btn
      task.completed = !task.completed; // toggle
      li.classList.toggle("completed"); // update UI
      saveTasks(); // save
    });

    li.querySelector("button").addEventListener("click", (e) => { // delete click
      e.stopPropagation(); // stop bubble
      tasks = tasks.filter((t) => t.id !== task.id); // remove from array
      li.remove(); // remove UI
      saveTasks(); // save
    });

    todoList.appendChild(li); // add in UL
  }

  function saveTasks() { // save fn
    localStorage.setItem("tasks", JSON.stringify(tasks)); // write to LS
  }
});
