const initialState = {
  toggled: false,
};
const toggleReducer = (state = initialState, action) => {
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
