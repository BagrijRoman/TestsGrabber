const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TEST_ACTION': {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
