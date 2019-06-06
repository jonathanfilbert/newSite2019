const initialState = {
  toggled: false,
};
const toggleReducer = (state = initialState, action) => {
  console.log('masuk reducer');
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        toggled: !state.toggled,
      };
    default:
      return state;
  }
};

export default toggleReducer;
