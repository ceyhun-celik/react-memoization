import { useReducer, useState, useCallback, useMemo } from "react";
import AddTodo from "./AddTodo";
import Header from "./Header";
import todoReducer from "./reducer/todoReducer";
import Todos from "./Todos";


function App() {
  console.log('APP rendered')

  const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: '',
    search: ''
  })

  const submitHandle = useCallback(e => {
    e.preventDefault()

    dispatch({
      type: 'ADD_TODO',
      value: state.todo
    })
  }, [state.todo])

  const InputHandle = useCallback(e => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  }, [])

  const SearchHandle = e => {
    dispatch({
      type: 'SET_SEARCH',
      value: e.target.value
    })
  }

  const filteredTodos = useMemo(() => {
    return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
  }, [state.todos, state.search])

  return (
    <div>
      <Header />

      <p>{count}</p>
      <button onClick={() => setCount(count => count + 1)}>Arttır</button>

      <hr />

      <input value={state.search} onChange={SearchHandle} placeholder="Todo search.." />

      <hr />

      <AddTodo submitHandle={submitHandle} InputHandle={InputHandle} todo={state.todo} />

      <Todos todos={filteredTodos} />
    </div>
  );
}

export default App;
