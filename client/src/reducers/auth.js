const profile = [];

export default (state = profile, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return [...state, action.user];
    default:
      return state;
  }
}