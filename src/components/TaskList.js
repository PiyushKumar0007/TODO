import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';

function TaskList(props) {
  const [tasks, setTasks] = useState([
    { id: 21, name: 'Hogwarts Mystery', completed: true },
    { id: 22, name: 'Philosopher Stone', completed: false },
    { id: 27, name: 'Adam and Eve', completed: false },
  ]);
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Hello {props.title}</h1>
      <ul>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={props.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
