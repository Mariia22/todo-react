import { filterReducer } from './filterReducer';
import { combineReducers } from 'redux';
import { todoReducer } from './todoReduser'

export const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoReducer,
})
export type RootState = ReturnType<typeof rootReducer>

