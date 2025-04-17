import React from 'react'

type TodoType = {
  id: number;
  item: string;
  complete: boolean;
};

type Props = {
  todo: TodoType;
  toggleTodo: (id: number) => void;
};

export default function Todo({todo, toggleTodo}: Props) {

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    toggleTodo(todo.id)
  }

   function removeTodo() {
    console.log("remove todo")
   }

  return (
    <div key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
            type="checkbox" 
            checked={todo.complete} 
            onChange={handleCheckboxChange} 
        />
        <h2>{todo.item}</h2>
        <button onClick={removeTodo}>Remove todo</button>
    </div>
  )
}