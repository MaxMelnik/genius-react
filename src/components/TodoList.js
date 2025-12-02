import { useState } from "react";

import ListItem from "./ListItem";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const onClickHandler = (input) => {
    const updatedElement = [
      ...items,
      {
        id: Math.random(),
        name: input,
      },
    ];
    setItems(updatedElement);
    setInput("");
  };

  const deletingHandler = (idToDelete) => {
    const updated = items.filter((item) => item.id !== idToDelete);
    setItems(updated);
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler(input);
    }
  };

  return (
    <>
      <h3>{items.length}</h3>
      <input
        onKeyDown={onEnterHandler}
        onChange={onChangeHandler}
        value={input}
      />
      <ul>
        {items.map((element, index) => (
          <ListItem
            key={element.id}
            element={element}
            deletingHandler={deletingHandler}
          />
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add</button>
    </>
  );
};

export default TodoList;
