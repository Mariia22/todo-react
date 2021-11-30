import { TodoState, TodoAction, TodoActionsTypes } from './../../types/todo'

const initialState: TodoState = {
  todos: []
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionsTypes.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
    case TodoActionsTypes.DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload)]
      }
    }
    case TodoActionsTypes.TOGGLE_TODO: {
      const newTodos = [...state.todos];
      newTodos.map(todo => {
        if (todo.id === action.payload) {
          todo.checked = !todo.checked
        }
      })
      return {
        ...state, todos: newTodos
      }
    }
    case TodoActionsTypes.CLEAR_ALL: {
      return {
        ...state,
        todos: []
      }
    }
    default: { return state }
  }
}