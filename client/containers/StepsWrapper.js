import { compose, withProps, withHandlers, lifecycle  } from 'recompose';
import { connect } from 'react-redux';

import StepsWrapper from '../components/StepsWrapper';
import { loadFacultiesList, prepareItemsSelectorOptions } from '../util';
import { setSelectedFaculty, setSelectedCourse, setSelectedSubject, setSelectedTest, goNextStep, goPrevStep } from '../actions';


export default compose(
  connect(({ root: { paramsData, selectedParams, currentStepIndex } }, props) => {
    const { facultiesList, coursesList, subjectsList, testList } = paramsData;

    return {
      // TODO this should be refactored
      facultiesList: prepareItemsSelectorOptions(facultiesList, 'name', 'id'),
      coursesList: prepareItemsSelectorOptions(coursesList, 'name', 'id'),
      subjectsList: prepareItemsSelectorOptions(subjectsList, 'name', 'id'),
      testList: prepareItemsSelectorOptions(testList, 'name', 'id'),
      selectedParams,
      stepIndex: currentStepIndex,
    };
  }),
  withHandlers({
    selectFaculty: ({ dispatch }) => (e, { value }) => dispatch(setSelectedFaculty(value)),
    selectCourse: ({ dispatch }) => (e, { value }) => dispatch(setSelectedCourse(value)),
    selectSubject: ({ dispatch }) => (e, { value }) => dispatch(setSelectedSubject(value)),
    selectTest: ({ dispatch }) => (e, { value }) => dispatch(setSelectedTest(value)),

    nextStep: ({ dispatch }) => () => dispatch(goNextStep()),
    prevStep: ({ dispatch }) => () => dispatch(goPrevStep()),
  }),
  lifecycle({
    componentWillMount() {
      loadFacultiesList();
    }
  }),
)(StepsWrapper);
