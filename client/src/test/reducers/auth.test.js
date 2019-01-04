import authReducer from '../../reducers/auth';

test('should set up default values', () => {
  const state = authReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({});
});

test('should set up user details after login', () => {
  const authReducerState = {};
  const action = {
    type: 'LOGIN',
    uid: 'someuid',
    displayName: 'somedisplayname',
    photoURL: 'somephotourl'
  }
  const state = authReducer(authReducerState, action);
  const { uid, displayName, photoURL } = action;
  expect(state).toEqual({
    ...authReducerState,
    uid,
    displayName,
    photoURL
  });
});

test('should remove user details after logout', () => {
  const authReducerState = {};
  const action = {
    type: 'LOGOUT',
    state: {}
  }
  const state = authReducer(authReducerState, action);
  expect(state).toEqual({
    ...authReducerState,
  });
});
