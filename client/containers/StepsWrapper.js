import { compose, withProps, withHandlers, lifecycle  } from 'recompose';
import { connect } from 'react-redux';

import StepsWrapper from '../components/StepsWrapper';
import { loadFacultiesList, prepareItemsSelectorOptions } from '../util';


export default compose(
  connect(({ root }, props) => {
    const { facultiesList } = root.paramsData;

    return {
      facultiesList: prepareItemsSelectorOptions(facultiesList, 'name', 'id'),
    };
  }),

  lifecycle({
    componentWillMount() {
      loadFacultiesList();
    }
  }),
)(StepsWrapper);
