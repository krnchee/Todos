import { connect } from 'react-redux';
import { receiveStep, removeStep } from '../../actions/step_actions';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';

const mapStateToProps = (state, props ) => ({
  steps: stepsByTodoId(state, props.todo_id),
  todo_id: props.todo_id
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: step => dispatch(removeStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
