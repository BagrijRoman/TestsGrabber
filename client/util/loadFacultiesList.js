import axios from 'axios';

import store from '../store';
import { setFacultiesList } from '../actions';
import { apiRoutes } from '../const';

const { dispatch } = store;

export const loadFacultiesList = () => {
  axios({
    method: 'GET',
    url: apiRoutes.faculties
  }).then(({ data }) => {
    dispatch(setFacultiesList(data));
  }).catch(err => {
    console.log(err);
  });
};
