import { TodoState, TodoAction, TodoActionsTypes, TodoType } from './../../types/todo'

const initialState: TodoState = {
  todos: []
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionsTypes.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), name: action.text, completed: action.completed }]
      }
    }
    case TodoActionsTypes.DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos.filter(todo => { todo.id !== action.id })]
      }
    }
    case TodoActionsTypes.TOGGLE_TODO: {
      return {
        ...state,
        todos:[...state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.completed != todo.completed
          }
        })]
      }
    }
    default: { return state }
  }
}