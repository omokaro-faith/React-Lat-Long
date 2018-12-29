import axios from 'axios';

export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  user
});
export const googleLogin = () => {
  return dispatch => axios.get('/auth/google').then((res) => {
    console.log(res);
    dispatch(setCurrentUser())
  });
}