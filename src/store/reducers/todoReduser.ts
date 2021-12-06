import { loadState } from './../localStorage';
import { TodoState, TodoAction, TodoActionsTypes } from './../../types/todo'

const initialState: TodoState = {
  todos: loadState() || [],
};

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
        todos: [...newTodos],
      }
    }
    case TodoActionsTypes.CLEAR_ALL_COMPLETED: {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.checked === false)],
      }
    }
    case TodoActionsTypes.DRAG_TODO: {
      const newTodos = [...state.todos];
      const removed = newTodos.splice(action.payload[0], 1);
      newTodos.splice(action.payload[1], 0, ...removed);
      return {
        ...state,
        todos: [...newTodos]
      }
    }
    default: { return state }
  }
}