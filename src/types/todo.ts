export interface TodoType {
  id: number
  text: string
  checked: boolean
}
export interface TodoState {
  todos: Array<TodoType>
}
export const FilterConst: any
  = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVE: 'ACTIVE'
};
/*export interface FilterType {
 filter: string
}*/
export enum TodoActionsTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  CLEAR_ALL_COMPLETED = 'CLEAR_All_COMPLETED',
  SET_FILTER = 'SET_FILTER',
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

export type TodoAction = AddTodoAction | ToggleTodoAction | ClearAllCompletedTodoAction | FilterAction;