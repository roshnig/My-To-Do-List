const ToDoList = (props) => {
    const handleChange = (evt) => {
        console.log(evt.target.node)
        const key = evt.target.checked;
        console.log(key)
        // props.setTasks((currentTasks) => {
        //     const key = evt.target.checked;
        //     console.log(key)
        //     //return 
        // })
    }
    return (
        <ul>
            {props.taskList.map((task) => {
                return (
                    <li key={task.id}>
                        <div className="list-items">
                            <input type="checkbox" checked={task.completed} onChange={handleChange}></input>
                            <p>{task.task}</p>
                            <div className="buttons">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default ToDoList;
