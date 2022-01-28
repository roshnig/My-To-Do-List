import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import Filter from './Filter';

function Main() {
    const [tasks, setTasks] = useState([
        { id: "1", task: "Brush my teeth", completed: true },
        { id: "2", task: "Have my breakfast", completed: false },
        { id: "3", task: "Walk the dog", completed: true },
        { id: "4", task: "Do some coding", completed: false }
    ])
    const [filtered, setfiltered] = useState('all')
    return (

        <div className="main">
            <ToDoForm setTasks={setTasks}></ToDoForm>
            <Filter setTasks={setTasks} filtered={filtered} setfiltered={setfiltered}></Filter>
            <ToDoList taskList={tasks} setTasks={setTasks} filtered={filtered}></ToDoList>
        </div>
    );
}

export default Main;