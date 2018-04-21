import React, {Component} from 'react';
import merge from 'lodash/merge';


class StepListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {todo_id: this.props.todo_id};
    this.toggleStep = this.toggleStep.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
  }

  toggleStep(event) {
    event.preventDefault();
    const updateStep = merge({},
      this.props.stepProps,
      {done: !(this.props.stepProps.done)})
    this.props.receiveStep(updateStep);
  }

  deleteStep(event) {
    event.preventDefault();
    this.props.removeStep(this.props.stepProps)
  }

  render() {
    const step = this.props.stepProps;
    return(
      <div>
        <li>{step.title}</li>
        <p>{step.body}</p>
        <button
         onClick={this.toggleStep}>{step.done ? 'done' : 'undo'}</button>
        <button
          onClick={this.deleteStep}>Delete Step</button>
      </div>
    )
  }
};

export default StepListItem;
