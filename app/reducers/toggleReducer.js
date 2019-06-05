const toggleReducer = (
  state = {
    toggled: false,
  },
  action,
) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        toggled: !state.toggled,
      };
      break;
    default:
  }
  return state;
};

export default toggleReducer;
