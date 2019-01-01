const initialState = {isLoading: true}
 
export default (state= initialState, action) => {
 switch (action.type) {
   case 'GET_USERS':
   const { users } = action
     return {...state, users, isLoading: false};
   default:
     return initialState;
 }
}
