import React from "react";

type TodoType = {
  id: number;
  item: string;
  complete: boolean;
};

type Props = {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export default function Todo({ todo, toggleTodo, removeTodo }: Props) {
  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    toggleTodo(todo.id);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleCheckboxChange}
      />
      <h2>{todo.item}</h2>
      <button onClick={() => removeTodo(todo.id)}>Remove todo</button>
    </div>
  );
}
