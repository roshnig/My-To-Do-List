
const Item = (props) => {
  return (
    <li key={props.task.id}>
      <div className="list-items">
        <input
          type="checkbox"
          checked={props.task.completed}
          onChange={(evt) => {
            const key = evt.target.checked;
            props.setTasks((currentTasks) => {
              const newTasks = currentTasks.map((task) => {
                return { ...task };
              });
              newTasks[props.index].completed = key;
              return newTasks;
            });
          }}
        ></input>
        <p>{props.task.task}</p>
        <div className="buttons">
                    <button onClick={(event) => {
                        props.setTasks((currTasks) => {
                            const newTasks = currTasks.map((task) => {
                                return { ...task }
                            })
                            newTasks.splice(props.index, 1)
                            return newTasks;
                        })
                    }}>Delete</button>
                </div>
      </div>
    </li>
  );
};

export default Item;
