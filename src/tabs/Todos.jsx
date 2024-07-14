import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = data => {
    setTodos(prevTodos => [...prevTodos, { text: data, id: nanoid() }]);
  };

  console.log(todos);

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">There are no any todos ...</Text>
      <TodoList todos={todos} />
    </>
  );
};
