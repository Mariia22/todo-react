import { TodoState } from './../types/todo';
export const loadState = () => {
  try {
    let serializedState = localStorage.getItem('store');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch (err) {
    return undefined;
  }
};

export const saveState = (todo: TodoState) => {
  try {
    let serializedState = JSON.stringify(todo)
    localStorage.setItem('store', serializedState)
  }
  catch (err) {
    console.log(err);
  }
};