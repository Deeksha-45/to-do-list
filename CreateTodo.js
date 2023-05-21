import React, { useState } from 'react';
import axios from 'axios';

const CreateTodo = () => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (todoText.trim() === '') {
      return;
    }

    try {
      await axios.post('/api/todos', { name: todoText });
      setTodoText('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          placeholder="Enter todo text"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;
