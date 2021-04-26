const form = document.querySelector("form");
const taskList = document.querySelector("#ToDoList");
 
// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
 let newLi = document.createElement("li");
 const doneButton = document.createElement("button");
 const undoButton = document.createElement("button");
 const removeButton = document.createElement("button");
 
 doneButton.addEventListener("click", function(event) {
   const  taskDone = event.target.parentElement.style.setProperty('text-decoration', 'line-through');
    localStorage.setItem('innerText', JSON.stringify(doneButton.innerText))
    localStorage.setItem('taskDone', true);
  });
  undoButton.addEventListener("click", function(event) {
   const  taskUndo = event.target.parentElement.style.setProperty('text-decoration', 'none');
    localStorage.setItem('taskDone', false);
  });
  removeButton.addEventListener("click", function(event) {
   const  taskRemove = event.target.parentElement.remove();
  });
 
 doneButton.innerText = "Done!";
 undoButton.innerText = "Undo!";
 removeButton.innerText = "Remove!"
 
 
 newLi.innerText = savedTodos[i].task;
  // if (newTodo.isCompleted) {
 //   newTodo.style.textDecoration = "line-through";
 // }
 taskList.append(newLi);
   newLi.append(doneButton, undoButton, removeButton);
}
 
 
 
 
form.addEventListener("submit", function(event) {
event.preventDefault();
const newTaskInput = document.querySelector("#Task");
localStorage.setItem('newTaskInput', JSON.stringify(newTaskInput));
const newLi = document.createElement("li");
localStorage.setItem('newLi', JSON.stringify(newLi));
const doneButton = document.createElement("button");
localStorage.setItem('doneButton', JSON.stringify(doneButton));
const undoButton = document.createElement("button");
localStorage.setItem('undoButton', JSON.stringify(undoButton));
const removeButton = document.createElement("button");
localStorage.setItem('removeButton', JSON.stringify(removeButton));
 
 
newLi.innerText = newTaskInput.value;
doneButton.innerText = "Done!";
undoButton.innerText = "Undo!";
removeButton.innerText = "Remove!"
localStorage.setItem('taskDone', 'none');
 
doneButton.addEventListener("click", function(event) {
 const  taskDone = event.target.parentElement.style.setProperty('text-decoration', 'line-through');
  localStorage.setItem('innerText', JSON.stringify(doneButton.innerText))
  localStorage.setItem('taskDone', true);
 
});
undoButton.addEventListener("click", function(event) {
 const  taskUndo = event.target.parentElement.style.setProperty('text-decoration', 'none');
  localStorage.setItem('taskDone', false);
 
});
 
removeButton.addEventListener("click", function(event) {
   const  taskRemove = event.target.parentElement.remove();
  });
 
taskList.append(newLi);
newLi.append(doneButton, undoButton, removeButton);
form.reset();
 
// save to localStorage
 
savedTodos.push({ task: newLi.innerText});
localStorage.setItem("todos", JSON.stringify(savedTodos));
 
 
});
