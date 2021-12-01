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
export function FilterAllTodoAction(): TodoAction {
  return { type: TodoActionsTypes.FILTER_ALL };
}
export function FilterActiveTodoAction(): TodoAction {
  return { type: TodoActionsTypes.FILTER_ACTIVE };
}
export function FilterCompletedTodoAction(): TodoAction {
  return { type: TodoActionsTypes.FILTER_COMPLETED };
}