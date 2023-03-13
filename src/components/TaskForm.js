import React, { useState } from "react";
import "../assets/css/TaskForm.css";

function TaskForm({ onSubmit }) {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
    };

    const generateId = () => Math.random().toString(36).substring(2, 18);

    const handleSubmit = e => {

        e.preventDefault();

        const newTask = {
            id: generateId(),
            text: input,
            completed: false
        }

        onSubmit(newTask);
    };

    return(
        <form className="task-form" onSubmit={handleSubmit}>
            <input 
                className="task-input" type="text" placeholder="Escribe una tarea" name="text" 
                onChange={handleChange} />
            <button className="task-btn">Agregar Tarea</button>
        </form>
    )
}

export default TaskForm;