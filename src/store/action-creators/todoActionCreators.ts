import { TodoAction, TodoActionsTypes } from './../../types/todo';
import { TodoType } from "../../types/todo";

export function AddTodoAction(todo: TodoType): TodoAction {
  return { type: TodoActionsTypes.ADD_TODO, payload: todo };
}

export function DeleteTodoAction(id: number): TodoAction {
  return { type: TodoActionsTypes.DELETE_TODO, payload: id };
}

export function ToggleTodoAction(id: number): TodoAction {
  return { type: TodoActionsTypes.TOGGLE_TODO, payload: id };
}

export function ClearAllTodoAction(): TodoAction {
  return { type: TodoActionsTypes.CLEAR_ALL };
}