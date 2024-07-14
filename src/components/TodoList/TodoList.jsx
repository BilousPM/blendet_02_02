import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, deleteTodos }) => {


  return (
    <Grid>
      {todos.map(({ text, id }, index) => (
        <TodoListItem key={id} text={text} index={index} deleteTodos={deleteTodos} id={id}/>
      ))}
    </Grid>
  );
};
