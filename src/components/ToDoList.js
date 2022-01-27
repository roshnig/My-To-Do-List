import { useState } from "react/cjs/react.development";

const ToDoList = (props) => {
    // here we will have useSate



    return (
        <ul>
            {props.taskList.map((task) => {
                return (
                    <li key={task.task}>{task.task}</li>
                )
            })}
        </ul>
        //todlist in this list we can pass tasks
        //todoform that should be passed settask
    )
}

export default ToDoList;