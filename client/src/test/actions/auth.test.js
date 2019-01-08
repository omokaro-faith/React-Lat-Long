import { Login, Logout, startLogin, startLogout } from '../../actions/auth';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test('should login user', () => {
  const auth = {
    uid: 'secret number',
    displayName: 'My name',
    photoURL: 'someurlstring'
  }
;
  const action = Login(auth);
  expect(action).toEqual({
    type: 'LOGIN',
    ...auth
  });
});

test('should logout user', () => {
  const action = Logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});


test('should not login user with firebase in this environment', async () => {
  const store = createMockStore();

  await store.dispatch(startLogin()).then(() => {
    const actions = store.getActions();
  });
});


test('should logout user with firebase', async () => {
  const store = createMockStore();

  await store.dispatch(startLogout()).then(() => {
    const actions = store.getActions();
  });
});
