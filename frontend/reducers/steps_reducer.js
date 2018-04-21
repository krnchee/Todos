import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions';
import merge from 'lodash/merge';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STEPS:
      nextState = merge({}, state);
      action.steps.forEach((step) => nextState[step.id] = step);
      return nextState;
    case RECEIVE_STEP:
      let newStep = {[action.step.id]: action.step};
      return merge({}, state, newStep);
    case REMOVE_STEP:
      let newState = merge({}, state);
      delete newState[action.step.id]
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
