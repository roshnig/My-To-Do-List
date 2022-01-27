import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function Main() {
    const taskList = [
        { task: "Brush my teeth" },
        { task: "Have my breakfast" }
    ];
    const [tasks, setTasks] = useState([
        { task: "Brush my teeth" },
        { task: "Have my breakfast" }
    ])
    return (
        <div className="main">
            <ToDoForm setTasks={setTasks}></ToDoForm>
            <ToDoList taskList={taskList}></ToDoList>
        </div>
    );
}

export default Main;