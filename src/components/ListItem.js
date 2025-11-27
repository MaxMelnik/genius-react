const ListItem = (props) => {
  return (
    <li key={props.index}>
      {props.element} {props.index}
    </li>
  );
};

export default ListItem;
