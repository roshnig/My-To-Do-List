import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function Main() {
    const [tasks, setTasks] = useState([
        { task: "Brush my teeth" },
        { task: "Have my breakfast" }
    ])
    return (
        
        <div 
        className="main">
            {console.log(tasks)}
            <ToDoForm setTasks={setTasks}></ToDoForm>
            <ToDoList taskList={tasks}></ToDoList>
        </div>
    );
}

export default Main;