import axios from 'axios';

const initialState = {
  portos: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETTING_IMAGE':
      axios
        .get('https://dementorjofil.herokuapp.com/get-porto-details/')
        .then(response => ({
          ...state,
          portos: response.data,
        }));
      break;
    default:
      return state;
  }
};

export default imageReducer;
