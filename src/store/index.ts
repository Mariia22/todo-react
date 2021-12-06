import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveState } from './localStorage';
import { throttle } from 'lodash';

export const store = createStore(rootReducer, composeWithDevTools())

store.subscribe(throttle(() => {
  saveState(store.getState().todoList.todos)
}, 1000))
