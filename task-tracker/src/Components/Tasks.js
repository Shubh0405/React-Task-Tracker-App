import React from 'react';
import Task from './Task.js';


const Tasks = ({ tasks, onDelete, onToggle }) => {
    return(
        <>
            {tasks.map((task) => (
                <Task detail={task} key={task.id} onDelete={onDelete} onToggle={onToggle} /> 
            ))}
        </>
    )
}

export default Tasks;