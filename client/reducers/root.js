import {
  GO_NEXT_STEP,
  GO_PREV_STEP,
  SET_FACULTIES_LIST,
  SET_COURSES_LIST,
  SET_SUBJECTS_LIST,
  SET_TESTS_LIST,
  SET_SELECTED_FACULTY,
  SET_SELECTED_COURSE,
  SET_SELECTED_SUBJECT,
  SET_SELECTED_TEST,
} from '../actions/actionTypes';
import { rootReducerInitialState } from '../const';

import { loadNextStepData } from '../util';

export default (state = rootReducerInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GO_NEXT_STEP: {
      const {currentStepIndex} = state;
      loadNextStepData(currentStepIndex);
      return {
        ...state,
        currentStepIndex: currentStepIndex + 1,
      };
    }

    case GO_PREV_STEP: {
      const { currentStepIndex } = state;
      return {
        ...state,
        currentStepIndex: currentStepIndex > 0 ? currentStepIndex - 1 : 0,
      };
    }
    case SET_FACULTIES_LIST:
      return {
        ...state,
        paramsData: {
          ...state.paramsData,
          facultiesList: payload,
          coursesList: [],
          subjectsList: [],
          testList: [],
        },
      };

    case SET_COURSES_LIST:
      return {
        ...state,
        paramsData: {
          ...state.paramsData,
          coursesList: payload,
          subjectsList: [],
          testList: [],
        },
      };

    case SET_SUBJECTS_LIST:
      return {
        ...state,
        paramsData: {
          ...state.paramsData,
          subjectsList: payload,
          testList: [],
        },
      };

    case SET_TESTS_LIST:
      return {
        ...state,
        paramsData: {
          ...state.paramsData,
          testList: payload,
        },
      };



    case SET_SELECTED_FACULTY:
      return {
        ...state,
        selectedParams: {
          ...state.selectedParams,
          facultyId: payload,
          courseId: '',
          subjectId: '',
          testId: '',
        }
      };

    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedParams: {
          ...state.selectedParams,
          courseId: payload,
          subjectId: '',
          testId: '',
        }
      };

    case SET_SELECTED_SUBJECT:
      return {
        ...state,
        selectedParams: {
          ...state.selectedParams,
          subjectId: payload,
          testId: '',
        }
      };

    case SET_SELECTED_TEST:
      return {
        ...state,
        selectedParams: {
          ...state.selectedParams,
          testId: payload,
        }
      };

    default: return { ...state };
  }
};
