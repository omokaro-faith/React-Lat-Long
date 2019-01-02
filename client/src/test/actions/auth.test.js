import { Login, Logout } from '../../actions/auth';

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
    uid: 'secret number',
    displayName: 'My name',
    photoURL: 'someurlstring'
  });
});

test('should logout user', () => {
  const action = Logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});