import React from 'react';
import PropTypes from 'prop-types';
import { Container, Accordion } from 'semantic-ui-react'

import ItemsSelector from '../containers/ItemsSelector';
import TestGrabber from '../containers/TestGrabber';

const StepsWrapper = ({
                        facultiesList,
                        coursesList,
                        subjectsList,
                        testList,
                        selectFaculty,
                        selectCourse,
                        selectSubject,
                        selectTest,
                        selectedParams,
                        stepIndex,
                        nextStep,
                        prevStep }) => (
  <Container textAlign='justified'>
    <Accordion fluid styled>
      <Accordion.Title active={stepIndex === 0} >Faculty </Accordion.Title>
      <Accordion.Content active={stepIndex === 0}>
        <ItemsSelector
          placeholder="Select faculty"
          options={facultiesList}
          firstStep
          selectedValue={selectedParams.facultyId}
          onItemSelect={selectFaculty}
          onClickNext={nextStep}
        />
      </Accordion.Content>

      <Accordion.Title active={stepIndex === 1}>Course </Accordion.Title>
      <Accordion.Content active={stepIndex === 1}>
        <ItemsSelector
          placeholder="Select course"
          options={coursesList}
          selectedValue={selectedParams.courseId}
          onItemSelect={selectCourse}
          onClickNext={nextStep}
          onClickBack={prevStep}
        />
      </Accordion.Content>

      <Accordion.Title active={stepIndex === 2}>Subject </Accordion.Title>
      <Accordion.Content active={stepIndex === 2}>
        <ItemsSelector
          placeholder="Select subject"
          options={subjectsList}
          selectedValue={selectedParams.subjectId}
          onItemSelect={selectSubject}
          onClickNext={nextStep}
          onClickBack={prevStep}
        />
      </Accordion.Content>

      <Accordion.Title active={stepIndex === 3}>Tests </Accordion.Title>
      <Accordion.Content active={stepIndex === 3}>
        <ItemsSelector
          placeholder="Select test"
          options={testList}
          selectedValue={selectedParams.testId}
          onItemSelect={selectTest}
          onClickNext={nextStep}
          onClickBack={prevStep}
        />
      </Accordion.Content>

      {/*<Accordion.Title active={stepIndex === 4}>Testing </Accordion.Title>*/}
      {/*<Accordion.Content active={stepIndex === 4}>*/}
      <Accordion.Title active>Testing </Accordion.Title>
      <Accordion.Content active>
        <TestGrabber
          onClickBack={prevStep}
        />
      </Accordion.Content>
    </Accordion>
  </Container>
);

StepsWrapper.propTypes = {
  facultiesList: PropTypes.array.isRequired,
};

export default StepsWrapper;