import React from "react";
import "../assets/css/Task.css";

function Task({ id, text, completed, completeTask, deleteTask }) {
    return(
        <div className={completed ? "container-task completed" : "container-task"}>
            <div className="task-text" onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className="task-icon" onClick={() => deleteTask(id)}>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>
        </div>
    )
}

export default Task;