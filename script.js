function addTask(){
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if(taskInput.value !== ""){

        // Create a new list Item
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</buttion>';
        
        // Add the new item to the list
        taskList.appendChild(li);

        // clear the input field
        taskInput.value = "";
    }
}

function removeTask(button) {
    var taskList = document.getElementById("taskList");

    //Remove the parent li element when the remove buttion is clicked
    taskList.removeChild(button.parentNode);
}