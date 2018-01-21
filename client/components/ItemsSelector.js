import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Container, Dropdown } from 'semantic-ui-react'


const ItemsSelector = ({ placeholder, options, firstStep, onItemSelect, selectedValue, onClickNext, onClickBack }) =>
  <Container>
    <Dropdown
      placeholder={placeholder}
      selection
      fluid
      options={options}
      onChange={onItemSelect}
      value={selectedValue}
    />
    <hr/>
    <Button.Group>
      { firstStep ? null : <Button onClick={onClickBack} content="back" icon="left arrow" labelPosition="left"/> }
      <Button disabled={!selectedValue} onClick={onClickNext} content="next" icon="right arrow" labelPosition="right"/>
    </Button.Group>
  </Container>;

ItemsSelector.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  firstStep: PropTypes.bool,
  onItemSelect: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
  onClickNext: PropTypes.func,
  onClickBack: PropTypes.func,
};

export default ItemsSelector;
