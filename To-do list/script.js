// Step 3: Load Tasks from Local Storage when page loads
$(document).ready(function () {
    loadTasks();
});

function loadTasks() {
    // Get tasks from localStorage or use empty array if none exist
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Clear the current list
    $("#taskList").empty();

    // Display each task
    tasks.forEach(function (task, index) {
        $("#taskList").append(`
            <li>
                ${task}
                <button onclick="deleteTask(${index})">X</button>
            </li>
        `);
    });
}

// Step 4: Add a Task
$("#addTask").click(function () {
    // Get the input value
    let task = $("#taskInput").val();

    // Check if input is empty
    if (task === "") return;

    // Get existing tasks or create empty array
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Add new task to array
    tasks.push(task);

    // Save updated array to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear input field
    $("#taskInput").val("");
    
    // Reload the task list
    loadTasks();
});

// Step 5: Delete a Task
function deleteTask(index) {
    // Get tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    
    // Remove task at given index
    tasks.splice(index, 1);

    // Save updated array to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    // Reload the task list
    loadTasks();
}
