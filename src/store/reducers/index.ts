import { combineReducers } from 'redux';
import { todoReducer } from './todoReduser'

export const rootReducer = combineReducers({
  todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>