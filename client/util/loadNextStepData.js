import store from '../store';
import { loadCoursesList, loadSubjectsList, loadTestsList } from './dataLoader';


export const loadNextStepData = (currentStep) => {
  const { facultyId, courseId, subjectId } = store.getState().root.selectedParams;

  switch (currentStep) {
    case 0: {
      return loadCoursesList(facultyId);
    }
    case 1: {
      return loadSubjectsList(courseId);
    }
    case 2: {
      return loadTestsList(subjectId);
    }
    default: { return null }
  }
};
