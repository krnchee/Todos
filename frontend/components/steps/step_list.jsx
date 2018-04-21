import React, { Component } from 'react';
import StepForm from './step_form';
import StepListItem from './step_list_item';

class StepList extends Component {

  render() {
    const stepItems = this.props.steps.map(step => <StepListItem
      stepProps={step}
      todo_id={this.props.todo_id}
      removeStep={this.props.removeStep}
      receiveStep={this.props.receiveStep}
    />)
    return(
      <div>
        <ul>
          {stepItems}
        </ul>
        <StepForm receiveStep={this.props.receiveStep} todo_id={this.props.todo_id}/>
      </div>
    )
  }
}

export default StepList;
