import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setUsers, getUsers } from '../../actions/users';
import users from '../fixtures/users';

const createMockStore = configureMockStore([thunk]);

test('should setup users', () => {
  const action = setUsers(users);

  expect(action).toEqual({
    type: 'GET_USERS',
    users
  });
});


test('should add users to store',async  () => {
  const store = createMockStore({});
  let action = null;

  await store.dispatch(getUsers(users)).then(() => {
    action = store.getActions();
    expect(action[0]).toEqual({
      type: 'GET_USERS',
      users: expect.any(Array)
    });
  })
});