export interface TodoType {
  id: number
  name: string
  completed: boolean
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
  text: string;
  completed: boolean
}
interface DeleteTodoAction {
  type: TodoActionsTypes.DELETE_TODO;
  id: number
}
interface ToggleTodoAction {
  type: TodoActionsTypes.TOGGLE_TODO;
  id: number
}
interface ClearAllTodoAction {
  type: TodoActionsTypes.CLEAR_ALL
}
export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleTodoAction | ClearAllTodoAction;