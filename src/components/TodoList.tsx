import { useTypedSelector } from "../store"

export function TodoList() {
  const todos = useTypedSelector(store => store.todo)

  console.log(todos)

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}