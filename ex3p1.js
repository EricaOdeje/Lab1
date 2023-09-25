taskArray = [];

//This arrow function is made to add a task to a do to list.
let addTask = (task) => {
    taskArray.push(task);

    console.log("Task:" + task + " has been added to our Array");
    return taskArray.length;
}

//This arrow function is created to iterate over all the asks in the array
let listAllTasks = () => {
    for (i = 0; i < taskArray.length; i++) {
        console.log(taskArray[i]);
    }
}

//This arrow fucntion is used to delete a string from the array.
let deleteTask = (task) => {

    let index = taskArray.indexOf(task);
    if(index > -1){
        taskArray.splice(index,1);
        console.log("Task:" +task+ "has been removed from the array");
    }
    return taskArray.length;
}


addTask("Learn JS");
addTask("Learn React");
listAllTasks();
deleteTask("Learn JS");
deleteTask("Learn React");