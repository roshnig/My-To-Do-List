const ToDoList = (props) => {
    // here we will have useSate

    return (
        <ul>
            {props.taskList.map((task) => {
                return (
                    <li key={task.task}>
                        <div className="list-items">
                            <input type="checkbox"></input>
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
