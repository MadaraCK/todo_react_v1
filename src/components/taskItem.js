import React from 'react';

function TaskItem({task, removeTask,changeStatus}) {
    return (
        <li className='liList'>
            <span  className={task.status ? 'status done' : 'status active'} onClick={() => changeStatus(task)} />
            {task.name}
            <button className='button-delete' onClick={() => removeTask(task)}>X</button>
        </li>
    );
}

export default TaskItem;