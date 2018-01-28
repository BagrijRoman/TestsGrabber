import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Input, Label } from 'semantic-ui-react'

const TestGrabber = ({ onClickBack, grabTestsCount, onGrabTestsCountChange, isGrabbingTest, grabTest }) =>
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
      <Label pointing='left'>Grabbed tests count  100</Label>
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
        disabled={isGrabbingTest}
      />
    </Container>
  </Container>;

TestGrabber.propTypes = {
  onClickBack: PropTypes.func,
};

export default TestGrabber;
