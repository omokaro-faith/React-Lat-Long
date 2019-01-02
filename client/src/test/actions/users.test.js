import { setUsers } from '../../actions/users';

test('should setup users', () => {
  const users = [
    {id: 1, name: 'Leanne Graham'},
    {id: 2, name: 'Ervin Howell'}
  ];

  const action = setUsers(users);

  expect(action).toEqual({
    type: 'GET_USERS',
    users
  });
});