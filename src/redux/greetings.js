const GET_GREETING = 'GET_GREETING';

const initialState = {
  message: null,
};

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch(
    'https://thawing-beyond-81828.herokuapp.com/api/greetings',
  );

  const text = await response.json();

  dispatch({
    type: GET_GREETING,
    payload: text,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GREETING':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default reducer;
