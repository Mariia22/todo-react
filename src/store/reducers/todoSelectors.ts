import { TodoType } from './../../types/todo';

export const selectTodo = (todos: Array<TodoType>, filterParam: string): Array<TodoType> => {
  switch (filterParam) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter((todo: TodoType) => todo.checked)
    case 'ACTIVE':
      return todos.filter((todo: TodoType) => !todo.checked)
    default: return todos
  }
}