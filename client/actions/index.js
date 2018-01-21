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
} from './actionTypes';

export const goNextStep = () => ({
  type: GO_NEXT_STEP,
});

export const goPrevStep = () => ({
  type: GO_PREV_STEP,
});


export const setFacultiesList = (list) => ({
  type: SET_FACULTIES_LIST,
  payload: list,
});

export const setCoursesList = (list) => ({
  type: SET_COURSES_LIST,
  payload: list,
});

export const setSubjectsList = (list) => ({
  type: SET_SUBJECTS_LIST,
  payload: list,
});

export const setTestsList = (list) => ({
  type: SET_TESTS_LIST,
  payload: list,
});


export const setSelectedFaculty = (facultyId) => ({
  type: SET_SELECTED_FACULTY,
  payload: facultyId,
});

export const setSelectedCourse = (courseId) => ({
  type: SET_SELECTED_COURSE,
  payload: courseId,
});

export const setSelectedSubject = (subjectId) => ({
  type: SET_SELECTED_SUBJECT,
  payload: subjectId,
});

export const setSelectedTest = (testId) => ({
  type: SET_SELECTED_TEST,
  payload: testId,
});

