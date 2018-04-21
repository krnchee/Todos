import React, {Component} from 'react';
import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends Component {
  render() {
    return(
      <div>
        {this.props.todo.body}
        <StepListContainer todo_id={this.props.todo.id}/>
      </div>
    )
  }
};

export default TodoDetailView;
