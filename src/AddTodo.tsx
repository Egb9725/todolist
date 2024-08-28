import React, { useState } from 'react';

interface AddTodoProps {
  addTask: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="tache"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
      />
      <button id="btn"type="submit">Ajouter</button>
    </form>
  );
};

export default AddTodo;
