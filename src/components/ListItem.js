const ListItem = (props) => {
  return (
    <li id={props.element.id}>
      {props.element.name}
      <button
        type="button"
        onClick={() => props.deletingHandler(props.element.id)}
      >
        🗑️
      </button>
    </li>
  );
};

export default ListItem;
