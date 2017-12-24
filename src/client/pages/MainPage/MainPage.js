import React from 'react';

import Stepper from '../../containers/Stepper';
import StepsWrapper from '../../containers/StepsWrapper';

import './mainPage.scss';

export default () => (
  <div className="page-container">
    <div className='stepper-container'>
      <Stepper />
    </div>
    <div className="page-content">
      <StepsWrapper />
    </div>
  </div>);
