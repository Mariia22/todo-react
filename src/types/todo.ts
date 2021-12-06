export interface TodoType {
  id: number,
  text: string,
  checked: boolean
}
export interface TodoState {
  todos: Array<TodoType>
}
export const FilterConst: any = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVE: 'ACTIVE'
};
export enum TodoActionsTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  CLEAR_ALL_COMPLETED = 'CLEAR_All_COMPLETED',
  SET_FILTER = 'SET_FILTER',
  DRAG_TODO = 'DRAG_TODO',
}
interface AddTodoAction {
  type: TodoActionsTypes.ADD_TODO;
  payload: string;
}
interface ToggleTodoAction {
  type: TodoActionsTypes.TOGGLE_TODO;
  payload: number
}
interface ClearAllCompletedTodoAction {
  type: TodoActionsTypes.CLEAR_ALL_COMPLETED;
}
interface FilterAction {
  type: TodoActionsTypes.SET_FILTER;
  payload: string
}
interface DragEndAction {
  type: TodoActionsTypes.DRAG_TODO;
  payload: Array<number>
}

export type TodoAction = AddTodoAction | ToggleTodoAction | ClearAllCompletedTodoAction | FilterAction | DragEndAction;