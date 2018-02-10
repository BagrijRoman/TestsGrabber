import axios from 'axios';

import store from '../store';
import { setFacultiesList, setCoursesList, setSubjectsList, setTestsList } from '../actions';
import { apiRoutes } from '../const';

const loadData = (reqParams, action) => {
  axios(reqParams).then(({ data }) => {
    store.dispatch(action(data));
  }).catch(err => {
    console.log(err);
  });
};


export const loadFacultiesList = () => loadData({ method: 'GET', url: apiRoutes.faculties }, setFacultiesList);

export const loadCoursesList = (facultyId) =>
  loadData({ method: 'GET', url: `${apiRoutes.courses}?facultyId=${facultyId}` }, setCoursesList);

export const loadSubjectsList = (courseId) =>
  loadData({ method: 'GET', url: `${apiRoutes.subjects}?courseId=${courseId}` }, setSubjectsList);

export const loadTestsList = (subjectId) =>
  loadData({ method: 'GET', url: `${apiRoutes.tests}?subjectId=${subjectId}` }, setTestsList);

export const loadTestInstance = (testId) => axios({
  method: 'GET',
  url: `${apiRoutes.testInstance}?testId=${testId}`
});
