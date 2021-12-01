export interface TodoType {
  id: number
  text: string
  checked: boolean
}
export interface TodoState {
  todos: Array<TodoType>,
  filter: Array<TodoType>
}
export enum TodoActionsTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  CLEAR_ALL_COMPLETED = 'CLEAR_All_COMPLETED',
  FILTER_ALL = 'FILTER_ALL',
  FILTER_ACTIVE = 'FILTER_ACTIVE',
  FILTER_COMPLETED = 'FILTER_COMPLETED'
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
interface FilterAllAction {
  type: TodoActionsTypes.FILTER_ALL;
}
interface FilterActiveAction {
  type: TodoActionsTypes.FILTER_ACTIVE;
}
interface FilterCompletedAction {
  type: TodoActionsTypes.FILTER_COMPLETED;
}
export type TodoAction = AddTodoAction | ToggleTodoAction | ClearAllCompletedTodoAction | FilterAllAction | FilterActiveAction | FilterCompletedAction;