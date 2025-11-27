import { useState } from "react";

import ListItem from "./ListItem";

const List = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(["First Element"]);

  const onClickHandler = (text) => {
    const newElement = text;
    const updatedElement = [...item, newElement];
    setItem(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <>
      <input onChange={onChangeHandler} value={input} />
      <ul>
        {item.map((element, index) => (
          <ListItem element={element} index={index} />
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add new element</button>
    </>
  );
};

export default List;
