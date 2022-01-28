import Item from './Item';
const ToDoList = (props) => {

    return (
        <ul>
            {props.taskList.map((task, index) => {
                return (
                    // <li key={task.id}>
                    //     <div className="list-items">
                    //         <input type="checkbox"
                    //             checked={task.completed}
                    //             onChange={(evt) => {
                    //                 const key = evt.target.checked;
                    //                 props.setTasks((currentTasks) => {
                    //                     const newTasks = currentTasks.map((task) => { return { ...task } });
                    //                     newTasks[index].completed = key;
                    //                     return newTasks;
                    //                 })
                    //             }}>
                    //         </input>
                    //         <p>{task.task}</p>
                    //         <div className="buttons">
                    //             <button>Edit</button>
                    //             <button>Delete</button>
                    //         </div>
                    //     </div>
                    // </li>
                    <Item key={task.id} task={task} index={index} setTasks={props.setTasks}></Item>
                );
            })}
        </ul>
    );
};

export default ToDoList;
