import React, { useState } from 'react';

const ToDoForm = (props) => {
    console.log(props);

    //const [task, setTask] = useState(props.taskList);
    const [newTask, setNewTask] = useState('');

    const addTask = (event) => {
        console.log(event)
        const val = event.target.value;
        console.log(document.getElementById('myinput'))
        // setTask((task) => {
        //     let newTask = [...task];
        //     newTask.push(val)
        //     return newTask;
        // })

    }
    return (
        <form>
            <input
                placeholder="please add a task"
                id='myinput'
            // value={newTask}
            // onChange={(event) => {
            //     console.log(event.target.value)
            // }
            // }
            ></input>
            <button onClick={addTask}>Add Task</button>
        </form>
    )
}

export default ToDoForm;