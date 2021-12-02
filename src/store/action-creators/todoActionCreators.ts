import { TodoAction, TodoActionsTypes } from './../../types/todo';
import { TodoType } from "../../types/todo";

export function AddTodoAction(text: TodoType['text']): TodoAction {
  return { type: TodoActionsTypes.ADD_TODO, payload: text };
}
export function ToggleTodoAction(id: number): TodoAction {
  return { type: TodoActionsTypes.TOGGLE_TODO, payload: id };
}
export function ClearAllTodoAction(): TodoAction {
  return { type: TodoActionsTypes.CLEAR_ALL_COMPLETED };
}
export function FilterTodoAction(filter: any): TodoAction {
  return { type: TodoActionsTypes.SET_FILTER, payload: filter };
}
