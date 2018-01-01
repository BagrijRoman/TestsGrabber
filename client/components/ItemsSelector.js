import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Container, Dropdown } from 'semantic-ui-react'


const ItemsSelector = ({ placeholder, options }) =>
  <Container>
    <Dropdown
      placeholder={placeholder}
      selection
      fluid
      options={options}
    />
    <hr/>
    <Button.Group>
      <Button content="back" icon="left arrow" labelPosition="left"/>
      <Button content="next" icon="right arrow" labelPosition="right"/>
    </Button.Group>
  </Container>;

ItemsSelector.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default ItemsSelector;
