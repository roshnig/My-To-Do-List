import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function Main() {
    const [tasks, setTasks] = useState([
        { id: "1", task: "Brush my teeth", completed: true },
        { id: "2", task: "Have my breakfast", completed: false }
    ])
    return (

        <div
            className="main">
            {console.log(tasks)}
            <ToDoForm setTasks={setTasks}></ToDoForm>
            <ToDoList taskList={tasks} setTasks={setTasks}></ToDoList>
        </div>
    );
}

export default Main;