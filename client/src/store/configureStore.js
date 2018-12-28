import { createStore } from 'redux';


function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

 // Store creation
 export default () => {
  const store = createStore(todos)
  return store;
}
