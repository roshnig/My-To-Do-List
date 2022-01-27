import { useState } from "react/cjs/react.development";
import "../App.css";

const ToDoList = (props) => {
  // here we will have useSate

  return (
    <ul>
      {props.taskList.map((task) => {
        return (
          <li key={task.task}>
            <div className="list-items">
              <p>{task.task}</p>
              <div className="buttons">
                <button>edit</button>
                <button>delete</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
