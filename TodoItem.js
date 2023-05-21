import React from 'react';

const TodoItem = ({ todo, handleDelete }) => {
  return (
    <div>
      <span>{todo.name}</span>
      <button onClick={() => handleDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
