import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Container, Accordion, Dropdown } from 'semantic-ui-react'

import ItemsSelector from '../containers/ItemsSelector';


const StepsWrapper = ({ facultiesList }) => (
  <Container textAlign='justified'>
    <Accordion fluid styled>
      <Accordion.Title active index={0}>Faculty </Accordion.Title>
      <Accordion.Content active>
        <ItemsSelector
          placeholder="Select faculty"
          options={facultiesList}
        />
      </Accordion.Content>

      <Accordion.Title index={1}>Course </Accordion.Title>
      <Accordion.Content>
        Some content
      </Accordion.Content>

      <Accordion.Title index={2}>Subject </Accordion.Title>
      <Accordion.Content> qweqwewqeqwe </Accordion.Content>

      <Accordion.Title index={3}>Test </Accordion.Title>
      <Accordion.Content>qweqwewqeqwe  </Accordion.Content>

      <Accordion.Title index={4}>Testing </Accordion.Title>
      <Accordion.Content> qweqweeq </Accordion.Content>
    </Accordion>
  </Container>
);

StepsWrapper.propTypes = {
  facultiesList: PropTypes.array.isRequired,
};

export default StepsWrapper;