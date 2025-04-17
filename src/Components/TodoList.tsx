import Todo from './Todo'

type TodoType = {
  id: number;
  item: string;
  complete: boolean;
};

type Props = {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
};

export default function TodoList({ todos, toggleTodo }: Props) {
  return (
    <div>
      {todos.map(todo => 
      <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>)}
    </div>
  )
}