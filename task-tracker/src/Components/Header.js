import React,{ useState } from 'react';
import Button from './Button.js';
import Tasks from './Tasks.js';
import AddTask from './AddTask.js';

const Header = (props) => {

    const [Form, setForm] = useState(false);

    const [AllTasks, setAllTask] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at School",
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        }
    ]);

    const onClick = () => {
        if(Form){
            setForm(false);
        }else{
            setForm(true);
        }
    }

    const deleteTask = (id) => {
        setAllTask(AllTasks.filter((Task) => Task.id !== id));
    }

    const toggleTask = (id) => {
        setAllTask(AllTasks.map((Task) => Task.id === id ? {...Task, reminder: !Task.reminder} : Task ))
    }

    const AddNewTask = (task) => {
       const id = AllTasks.length + 2;
       const newTask = { id, ...task };
       setAllTask([...AllTasks, newTask])
    }

    return(
        <>
            <div className="header">
                <div className="top">
                    <h1>Task Tracker</h1>
                    <Button text={ Form ? 'Close' : 'Add' } color={ Form ? 'red' : 'green' } className="btn" onClick={onClick}/>
                </div>
                { Form ? <AddTask onAdd={AddNewTask} /> : '' }
                <div className="tasks">
                    {AllTasks.length > 0 ? <Tasks tasks={AllTasks} onDelete={deleteTask} onToggle={toggleTask} /> : 'No Tasks to Show'}
                </div>
            </div>
        </>
    )
};

export default Header;