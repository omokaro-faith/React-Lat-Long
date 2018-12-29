import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 // Store creation
 export default () => {
  const store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)))
  return store;
}
