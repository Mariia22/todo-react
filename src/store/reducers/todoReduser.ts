import { TodoState, TodoAction, TodoActionsTypes } from './../../types/todo'

const initialState: TodoState = {
  todos: [{ id: 578697589, text: "Task 1 ", checked: false }, { id: 578697590, text: "Task 2", checked: true }],
  filter: []
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionsTypes.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, checked: false }],
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
        ...state,
        todos: newTodos,
      }
    }
    case TodoActionsTypes.CLEAR_ALL_COMPLETED: {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.checked === false)],
      }
    }
    case TodoActionsTypes.FILTER_ALL: {
      return {
        ...state,
        todos: [...state.todos]
      }
    }
    case TodoActionsTypes.FILTER_ACTIVE: {
      return {
        ...state,
        filter: [...state.todos.filter(todo => todo.checked === false)],
      }
    }
    case TodoActionsTypes.FILTER_COMPLETED: {
      return {
        ...state,
        filter: [...state.todos.filter(todo => todo.checked === true)],
      }
    }
    default: { return state }
  }
}