import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import SortingOptions from './SortingOptions';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const sortedTodos = todos.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (nameA > nameB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <h2>Todo List</h2>
      <SortingOptions
        sortOrder={sortOrder}
        handleSortOrderChange={handleSortOrderChange}
      />
      {sortedTodos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;

