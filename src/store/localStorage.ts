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

export const saveState = (state: any): void => {
  try {
    let serializedState = JSON.stringify(state)
    localStorage.setItem('store', serializedState)
  }
  catch (err) {
    console.log(err);
  }
};