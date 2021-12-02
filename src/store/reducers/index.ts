import { filterReducer } from './filterReducer';
import { combineReducers } from 'redux';
import { todoReducer } from './todoReduser'

export const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>