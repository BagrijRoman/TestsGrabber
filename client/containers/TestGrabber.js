import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import TestGrabber from '../components/TestGrabber';
import { loadTestInstance } from '../util/dataLoader';
import { addTestsToResult } from '../actions';

export default compose(
  connect(({ root: { selectedParams: { testId }, tests } }) => ({
    testId,
    grabbedTestsCount: Object.keys(tests[testId] || {}).length,
    grabbedTests: tests[testId] || {},
  })),
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
    downloadTestResults: ({ grabbedTests }) => () => {
      const download = (filename, text) => {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      };

      let testsText = '';
      Object.keys(grabbedTests).map((testKey, index) => {
        const { text, answers } = grabbedTests[testKey];
        testsText += '\n\n' + index + '.' + text;
        for(let index = 0; index < answers.length; index++) {
          const {isTrueAnswer, text} = answers[index];
          testsText += '\n\t' + (isTrueAnswer ? '+' : '') + text;
        }
      });

      download('Tests.txt', testsText);
    },
  })
)(TestGrabber);
