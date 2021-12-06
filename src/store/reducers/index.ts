import { filterReducer } from './filterReducer';
import { combineReducers } from 'redux';
import { todos } from './todoReduser'

export const rootReducer = combineReducers({
  filter: filterReducer,
  todos,
})

export type RootState = ReturnType<typeof rootReducer>
