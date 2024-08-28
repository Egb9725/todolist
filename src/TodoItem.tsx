import React from 'react';

import { Task } from './types';

interface TodoItemProps {
  task: Task;
  toggleTask: () => void;
  deleteTask: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={toggleTask}
      >
        {task.text}
      </span>
      <button onClick={deleteTask}>Supprimer</button>
    </li>
  );
};

export default TodoItem;
