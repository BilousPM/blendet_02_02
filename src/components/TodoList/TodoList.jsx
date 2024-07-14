import { Grid, TodoListItem } from '..';

export const TodoList = ({todos}) => {
  return (
    <>
      <Grid>
        {todos.map(({text, id}, index) => (
          <TodoListItem key={id} text={text} index={index}/>
        ))}
      </Grid>
      ;
    </>
  );
};
