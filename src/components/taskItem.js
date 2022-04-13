import React from 'react';

function TaskItem({task,removeTask,changeStatus}) {
    return (
        <li>
            <span className={task.status ? 'status done' : 'status active'} onClick={() => changeStatus()} />
            {task.name}
            <button onClick={() => removeTask(task)}>delete</button>
        </li>
    );
}

export default TaskItem;