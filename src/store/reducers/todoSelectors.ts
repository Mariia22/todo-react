import { TodoState } from './../../types/todo';
import { Filters } from "../../types/todo";

export const getTodoByFilter = (state: any, filter: Filters): TodoState => {
  switch (filter) {
    case Filters.ALL:
      return state.todos
    case Filters.COMPLETED:
      return state.todos.filter((todo: any) => todo.checked)
    case Filters.ACTIVE:
      return state.todos.filter((todo: any) => !todo.checked)
    default: return state.todos
  }
}