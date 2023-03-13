import React, { useState } from "react";
import "../assets/css/TaskList.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList() {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
       if(task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
       }
    };

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        })

        setTasks(updatedTasks);
    };

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className="container-task-list">
                {
                    tasks.map((task) => 
                        <Task 
                        key={task.id} id={task.id} 
                        text={task.text} 
                        completed={task.completed}  
                        deleteTask={deleteTask} 
                        completeTask={completeTask} />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;