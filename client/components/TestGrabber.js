import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Input, Label } from 'semantic-ui-react'

const TestGrabber = ({
  onClickBack,
  grabTestsCount,
  onGrabTestsCountChange,
  isGrabbingTest,
  grabTest,
  grabbedTestsCount,
  downloadTestResults,
}) =>
  <Container>
    <Container>
      <Input
        label="Tests count"
        type="number"
        min="1"
        max="500"
        value={grabTestsCount}
        onChange={onGrabTestsCountChange}
        disabled={isGrabbingTest}
      />
      <Label pointing='left'>Grabbed tests count {grabbedTestsCount}</Label>
    </Container>
    <Container>
      <Button
        onClick={onClickBack}
        content="back"
        icon="left arrow"
        labelPosition="left"
        disabled={isGrabbingTest}
      />
      <Button
        content="Grab test"
        icon="right arrow"
        labelPosition="right"
        onClick={grabTest}
        loading={isGrabbingTest}
      />
    </Container>
    <Button
      onClick={downloadTestResults}
      disabled={isGrabbingTest || !grabbedTestsCount}
    >
      Load test results
    </Button>
  </Container>;

TestGrabber.propTypes = {
  onClickBack: PropTypes.func,
};

export default TestGrabber;
