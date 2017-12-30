import React from 'react';
import PropTypes from 'prop-types';


const StepsWrapper = ({ onClickHandler }) => (
  <div>
    <h3>Steps wrapper</h3>

    <button
      onClick={onClickHandler}
    > Test button </button>


  </div>
);

StepsWrapper.propTypes = {};

export default StepsWrapper;