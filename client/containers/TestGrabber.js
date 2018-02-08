import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import TestGrabber from '../components/TestGrabber';
import { loadTestInstance } from '../util/dataLoader';
import { addTestsToResult } from '../actions';

export default compose(
  connect(({ root: { selectedParams: { testId } } }) => ({ testId })),
  withState('grabTestsCount', 'setGrabTestsCount', 10),
  withState('isGrabbingTest', 'setGrabbingTestState', false),

  withHandlers({
    onGrabTestsCountChange: ({ setGrabTestsCount }) => ({ target: { value } }) => setGrabTestsCount(value),
    grabTest: ({ setGrabbingTestState, setGrabTestsCount, grabTestsCount, testId, dispatch }) => () => {
      const makeRequest = (reqCount) => new Promise((res, rej) =>
        loadTestInstance(testId)
          .then(({ data }) => {
            dispatch(addTestsToResult(data, testId));
            res();
          })
          .then(() => {
            if (reqCount > 1)  {
              makeRequest(reqCount - 1);
            } else {
              setGrabbingTestState(false);
            }
          }));

      if (grabTestsCount > 0) {
        setGrabbingTestState(true);
        makeRequest(grabTestsCount);
      }
    },
  })
)(TestGrabber);
