const TodoItem = (props) => {
  return (
    <div>
      {props.todo.flag ? "+" : "-"} {props.todo.todo}
    </div>
  );
};

export default TodoItem;
