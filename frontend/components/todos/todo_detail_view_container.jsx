import { connect } from 'react-redux';
import React from 'react';
import {receiveTodos, receiveTodo, removeTodo} from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';
import { receiveSteps } from '../../actions/step_actions';


const mapDispatchToProps = (dispatch, props) => {
  removeTodo: () => dispatch(removeTodo(props.todo))
}

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
