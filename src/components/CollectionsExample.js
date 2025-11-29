import TodoItem from "./TodoItem";

const CollectionsExample = () => {
  const todos = [
    { id: 1, todo: "first", flag: false },
    { id: 2, todo: "second", flag: true },
    { id: 3, todo: "third" },
  ];

  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default CollectionsExample;
