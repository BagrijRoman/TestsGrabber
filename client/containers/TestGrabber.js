import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import TestGrabber from '../components/TestGrabber';
import { loadTestInstance } from '../util/dataLoader';

export default compose(
  connect(({ root: { selectedParams: { testId } } }) => ({ testId })),
  withState('grabTestsCount', 'setGrabTestsCount', 10),
  withState('isGrabbingTest', 'setGrabbingTestState', false),

  withHandlers({
    onGrabTestsCountChange: ({ setGrabTestsCount }) => ({ target: { value } }) => setGrabTestsCount(value),
    grabTest: ({ setGrabbingTestState }) => () => {
      setGrabbingTestState(true);

    },
    testAction: ({ testId, dispatch }) => () => {
      console.log('test action');

      loadTestInstance(2280)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(err => {
          // debugger;
        });
    },
  })
)(TestGrabber);
