import React from 'react';
import { BsFillBackspaceFill } from "react-icons/bs";

const Task = (props) => {
    return (
        <>
            <div className={`singletask ${props.detail.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.onToggle(props.detail.id)}>
                <h3 className="tasktext">{props.detail.text} <BsFillBackspaceFill style={{ color: 'red', cursor: 'pointer' }} onClick={() => props.onDelete(props.detail.id)} /> </h3>
                <p>{props.detail.day}</p>
            </div>
        </>
    )
}

export default Task;
