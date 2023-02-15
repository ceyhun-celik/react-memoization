export default function todoReducer(state, action) {
    switch (action.type) {
        case 'SET_TODO': return {
          ...state,
          todo: action.value
        }
      
        case 'ADD_TODO': return {
          ...state,
          todo: '',
          todos: [
            ...state.todos,
            action.value
          ]
        }

        case 'SET_SEARCH': return {
          ...state,
          search: action.value
        }
      }
}

/*
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: ''
  })

  const InputHandle = e => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  }

  const submitHandle = e => {
    e.preventDefault()

    dispatch({
      type: 'ADD_TODO',
      value: state.todo
    })
  }
*/