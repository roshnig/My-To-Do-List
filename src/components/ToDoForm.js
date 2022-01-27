import React, { useState } from "react";

const ToDoForm = (props) => {
  const [task, setTask] = useState({ task: "" });

  const addTask = (event) => {
    event.preventDefault();
    props.setTasks((tasks) => {
      let newTasks = [...tasks];
      newTasks.push(task);
      return newTasks;
    });
  };
  return (
    <form>
      <input
        placeholder="please add a task"
        id="myinput"
        value={task.task}
        onChange={(event) => {
          setTask((task) => {
            let newTask = { ...task };
            newTask.task = event.target.value;
            return newTask;
          });
        }}
      ></input>
      <button onClick={addTask}>Add Task</button>
    </form>
  );
};

export default ToDoForm;
