import Item from './Item';
const ToDoList = (props) => {

const filter = props.taskList.filter((task) => {
    let value = props.filtered
    console.log(value)
    if(value === 'incomplete'){
        return task.completed === false
    } else if (value === 'complete'){
        return task.completed === true
    } else {
        return true
    }
})

    return (
        <ul>
            {filter.map((task, index) => {
                return (
                    <Item key={task.id} task={task} index={index} setTasks={props.setTasks}></Item>
                );
            })}
        </ul>
    );
};

export default ToDoList;
