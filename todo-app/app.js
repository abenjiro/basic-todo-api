const date = new Date();

// Task submission
let taskForm = document.getElementById("taskForm");

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = document.getElementById("task");
    let priority = document.querySelector("input[name=priority]:checked").value

    // Get pending/completed task list container
    let tasklist = document.querySelector(".pending-list");
    let completedList = document.querySelector(".completed-list");


    // Create task container
    let newTask = document.createElement("div");
    newTask.className = "task";

    // Create unique ID
    let taskId = "task-" + Date.now();

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = taskId;

    // Create label
    let label = document.createElement("label");
    label.setAttribute("for", taskId);
    label.innerText = task.value;

    // Create meta span
    let meta = document.createElement("span");
    meta.className = "meta";
    const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    meta.innerText = `| ${priority.charAt(0).toUpperCase() + priority.slice(1)} | ${today}`;

    // Append all to newTask
    newTask.appendChild(checkbox);
    newTask.appendChild(label);
    newTask.appendChild(meta);

    // Append new task to list
    tasklist.appendChild(newTask);

    // Optional: reset form
    taskForm.reset();

    //checked 
    checkbox.addEventListener('change', () => {
        console.log("checked")
        if (checkbox.checked) {
            // Create completed task in the same structure
            const completeTask = document.createElement("div");
            completeTask.className = "complete-task";

            const taskText = document.createElement("span");
            taskText.textContent = label.textContent;

            const metaText = document.createElement("span");
            metaText.className = "meta";
            metaText.textContent = meta.textContent;

            completeTask.appendChild(taskText);
            completeTask.appendChild(metaText);

            completedList.appendChild(completeTask);
            tasklist.removeChild(newTask);
        }
    })
});

// Task List
