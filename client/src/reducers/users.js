const initialState = {}
 
export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_USERS':
     return {
       ...state,
       users: action.users
     };
   default:
     return initialState;
 }
}
