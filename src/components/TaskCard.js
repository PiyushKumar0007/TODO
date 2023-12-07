import React from 'react';

function TaskCard({ task, handleDelete }) {
  return (
    <li className={task.completed ? 'complete' : 'notComplete'}>
      <span>{task.name}</span>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </li>
  );
}

export default TaskCard;
