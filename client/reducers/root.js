import { SET_FACULTIES_LIST } from '../actions/actionTypes';
import { rootReducerInitialState } from '../const';

export default (state = rootReducerInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FACULTIES_LIST: {
      return {
        ...state,
        paramsData: {
          ...state.paramsData,
          facultiesList: payload,
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};
