import React, { useState } from "react";

const ToDoForm = (props) => {
    const [task, setTask] = useState({ task: "", completed: false });

    const addTask = (event) => {
        event.preventDefault();
        props.setTasks((tasks) => {
            let newTasks = [...tasks];
            newTasks.push(task);
            return newTasks;

        });
        setTask({ task: "", completed: false })
    };

    const handleInputValue = (event) => {
        setTask((task) => {
            let newTask = { ...task };
            newTask.task = event.target.value;
            newTask.id = Date.now();
            return newTask;
        });
    }

    return (
        <form className="inputForm">
            <input
                placeholder="please add a task"
                id="myinput"
                value={task.task}
                onChange={handleInputValue}
            ></input>
            <button onClick={addTask}>Add Task</button>
        </form>
    );
};

export default ToDoForm;
