import { TodoType } from './../../types/todo';

export const getTodoByFilter = (todos: Array<TodoType>, filterParam: string): Array<TodoType> => {
  switch (filterParam) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter((todo: any) => todo.checked)
    case 'ACTIVE':
      return todos.filter((todo: any) => !todo.checked)
    default: return todos
  }
}