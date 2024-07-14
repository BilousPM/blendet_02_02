import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const data = JSON.parse(localStorage.getItem('todos'));

    // if (data) {
    //   return data;
    // }
    return data ?? [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onSubmit = data => {
    setTodos(prevTodos => [...prevTodos, { text: data, id: nanoid() }]);
  };

  const deleteTodos = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  console.log(todos);

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">There are no any todos ...</Text>
      <TodoList todos={todos} deleteTodos={deleteTodos} />
    </>
  );
};
