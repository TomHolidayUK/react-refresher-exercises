import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

type Todo = {
  id: number;
  item: string;
  complete: boolean;
};

export default function Exercise2() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todosList, setTodoList] = useState<Todo[]>([]);
  const [emptyWarning, setEmptyWarning] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  function updateTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function addTodo() {
    if (newTodo === "") {
      setEmptyWarning("todo empty, not adding");
      return;
    }
    setTodoList(
      todosList.concat({ id: todosList.length, item: newTodo, complete: false })
    );
    setNewTodo("");
    setEmptyWarning("");
    if (inputRef.current) inputRef.current.focus();
  }

  function clearTodos() {
    setTodoList(todosList.filter((todo) => !todo.complete));
  }

  function removeTodo(id: number) {
    setTodoList(todosList.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id: number) {
    const newTodos = todosList.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodoList(newTodos);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div>
      <h2>Exercise 2: Todo List</h2>
      <TodoList
        todos={todosList}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
      <input
        ref={inputRef}
        type="text"
        value={newTodo}
        onChange={updateTodo}
        onKeyDown={handleKeyPress}
      />
      <button onClick={addTodo}>Add todo</button>
      <button onClick={clearTodos}>Clear completed</button>
      <div>{emptyWarning}</div>
      <div>
        {todosList.filter((todo) => todo.complete === false).length} left to do
      </div>
    </div>
  );
}
