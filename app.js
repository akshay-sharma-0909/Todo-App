function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.onclick = function () { toggleTask(checkbox); };
    
    let span = document.createElement("span");
    span.textContent = taskText;
    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = function () { removeTask(removeBtn); };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleTask(checkbox) {
    let task = checkbox.nextElementSibling;
    task.classList.toggle("completed");
}