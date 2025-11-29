import { useState } from "react";

import ListItem from "./ListItem";

const List = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const onClickHandler = (input) => {
    const updatedElement = [...items, input];
    setItems(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      const updatedElement = [...items, input];
      setItems(updatedElement);
      setInput("");
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
          <ListItem element={element} index={index} />
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add TO DO</button>
    </>
  );
};

export default List;
