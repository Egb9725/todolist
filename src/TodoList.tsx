import React from 'react';
import TodoItem from './TodoItem';
import { Task } from './types';


interface TodoListProps {
  tasks: Task[];
  toggleTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
