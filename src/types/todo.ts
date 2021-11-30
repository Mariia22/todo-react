
export interface TodoType {
  id: number
  name: string
  checked: boolean
}
export interface TodoState {
  todos: Array<TodoType>
}
export enum TodoActionsTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  CLEAR_ALL = 'CLEAR_All'
}
interface AddTodoAction {
  type: TodoActionsTypes.ADD_TODO;
  payload: TodoType
}
interface DeleteTodoAction {
  type: TodoActionsTypes.DELETE_TODO;
  payload: number
}
interface ToggleTodoAction {
  type: TodoActionsTypes.TOGGLE_TODO;
  payload: number
}
interface ClearAllTodoAction {
  type: TodoActionsTypes.CLEAR_ALL
}
export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleTodoAction | ClearAllTodoAction;