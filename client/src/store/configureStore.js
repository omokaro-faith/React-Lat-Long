import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import users from '../reducers/users';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 // Store creation
 export default () => {
  const store = createStore(users, composeEnhancers(applyMiddleware(thunk)))
  return store;
}
