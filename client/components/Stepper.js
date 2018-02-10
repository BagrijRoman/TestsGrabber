import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Step } from 'semantic-ui-react'

const Stepper = () => (
  <Step.Group vertical>
    <Step>
      <Icon name='student' />
      <Step.Content>
        <Step.Title>Faculty</Step.Title>
        <Step.Description></Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='numbered list' />
      <Step.Content>
        <Step.Title>Course</Step.Title>
        <Step.Description></Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='doctor' />
      <Step.Content>
        <Step.Title>Subject</Step.Title>
        <Step.Description></Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='browser' />
      <Step.Content>
        <Step.Title>Test</Step.Title>
        <Step.Description></Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='file text outline' />
      <Step.Content>
        <Step.Title>Testing</Step.Title>
        <Step.Description></Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

Stepper.propTypes = {};

export default Stepper;