import { setUsers } from '../../actions/users';
import users from '../fixtures/users';

test('should setup users', () => {
  const action = setUsers(users);

  expect(action).toEqual({
    type: 'GET_USERS',
    users
  });
});