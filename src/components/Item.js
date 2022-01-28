const Item = (props) => {
    return (
        <li key={props.task.id}>
            <div className="list-items">
                <input type="checkbox"
                    checked={props.task.completed}
                    onChange={(evt) => {
                        const key = evt.target.checked;
                        props.setTasks((currentTasks) => {
                            const newTasks = currentTasks.map((task) => { return { ...task } });
                            newTasks[props.index].completed = key;
                            return newTasks;
                        })
                    }}>
                </input>
                <p>{props.task.task}</p>
                <div className="buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Item;