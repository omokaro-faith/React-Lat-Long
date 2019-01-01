import axios from 'axios'
 
export const setUsers = (users) => ({
 type: 'GET_USERS',
 users
});

export const getUsers = () => {
 return dispatch => axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
   dispatch(setUsers(res.data));
 })};