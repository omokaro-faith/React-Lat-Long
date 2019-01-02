import usersReducer from '../../reducers/auth';
import users from '../fixtures/users';

test('should set up default values', () => {
  const state = usersReducer(undefined, {type: '@@INIT'});

  expect(state).toEqual({});
});

test('should set up users details', () => {
  const usersReducerState = {};
  const action = {
    type: 'GET_USERS',
    users
  }

  const state = usersReducer(usersReducerState, action);
  const { users } = action;
  expect(state).toEqual({
    ...usersReducerState,
    users
  });
});
