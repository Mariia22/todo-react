import { Filters, TodoAction, TodoActionsTypes } from './../../types/todo';

const initialState:Filters = Filters.ALL;
export const filterReducer = (state = initialState, action: TodoAction): any => {
  switch (action.type) {
    case TodoActionsTypes.SET_FILTER: {
      return action.payload
    }
    default: { return state }
  }
}