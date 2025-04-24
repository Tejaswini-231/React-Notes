import React, { useState } from 'react';

function ToDo() {
    const [tasks, setTasks] = useState(["study", "journal", "go on a walk"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        return () => {  
            const updatedList = tasks.filter((_, i) => i !== index);
            setTasks(updatedList);
        };
    }

    return (
        <div>
            <h4>To-Do List</h4>
            <input type="text" placeholder='Enter the task..'  value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>Add task</button>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDo;