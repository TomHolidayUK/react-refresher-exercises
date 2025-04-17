import React, {useState} from 'react'
import TodoList from './TodoList'

type Todo = {
  id: number;
  item: string;
  complete: boolean;
};

export default function Exercise2() {
  const [newTodo, setNewTodo] = useState<string>("")
  const [todosList, setTodoList] = useState<Todo[]>([])
  
  function updateTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function addTodo() {
    console.log(todosList.filter(todo => todo.complete === false).length)
    if (newTodo === "") {
      console.log("todo empty, not adding")
      return
    }
    setTodoList(todosList.concat({id: todosList.length, item: newTodo, complete: false}))
    setNewTodo("")
  }

  function clearTodos() {
    setTodoList([])
  }

  function toggleTodo(id: number) {
    console.log("test 2")
    const newTodos = [...todosList]
    const todo = newTodos.find(todo => todo.id === id)
    if (todo) {
      todo.complete = !todo.complete
    }
    setTodoList(newTodos)
  }

  return (
    <div>
      <h2>Exercise 2</h2>
      <TodoList todos={todosList} toggleTodo={toggleTodo}/>
      <input type="text" value={newTodo} onChange={updateTodo}/>
      <button onClick={addTodo}>Add todo</button>
      <button onClick={clearTodos}>Clear completed</button>
      <div></div>
      <div>{todosList.filter(todo => todo.complete === false).length} left to do</div>
    </div>
  )
}
